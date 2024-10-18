import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from "cors";
// Initialize Prisma Client
const prisma = new PrismaClient();
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());
const createAST = (ruleString: string) => {
    const tokens: any = ruleString
    .replace(/\s+/g, ' ') // Normalize whitespace
    .match(/(\(|\)|AND|OR|[a-zA-Z_][a-zA-Z0-9_]*\s*[><=]\s*\d+|[a-zA-Z_][a-zA-Z0-9_]*\s*[><=]\s*['"][^'"]*['"])/g); // Match operands and operators

    const output: any[] = []; // Output stack for the AST nodes
    const operators: string[] = []; // Stack for operators

    const precedence: { [key: string]: number } = { 'OR': 1, 'AND': 2 };

    const isOperator = (token: string) => precedence[token] !== undefined;

    const popOperators = () => {
        const operator = operators.pop();
        const right = output.pop();
        const left = output.pop();
        output.push({ type: 'operator', value: operator, left, right });
    };

    for (const token of tokens) {
        if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                popOperators();
            }
            operators.pop(); // Remove '('
        } else if (isOperator(token)) {
            while (
                operators.length &&
                isOperator(operators[operators.length - 1]) &&
                precedence[token] <= precedence[operators[operators.length - 1]]
            ) {
                popOperators();
            }
            operators.push(token);
        } else {
            // This is an operand
            output.push({ type: 'operand', value: token.trim() });
        }
    }

    // Pop remaining operators
    while (operators.length) {
        popOperators();
    }

    console.log("AST Structure: ", output[0]);
    return output[0]; // Return the root of the AST
};






const createASTNode = async (node: any): Promise<number> => {
    // Check if the node is an operator with children
    const createdNode = await prisma.node.create({
        data: {
            type: node.type,
            value: node.value,
            leftId: node.left ? await createASTNode(node.left) : null,
            rightId: node.right ? await createASTNode(node.right) : null,
        },
    });

    return createdNode.id; // Return the ID of the created node
};


// POST /api/rules/create
// POST /api/rules/create
// POST /api/rules/create
app.post('/api/rules/create', async (req: Request, res: Response): Promise<void> => {
    try {
        const { ruleString } = req.body;

        const ast = createAST(ruleString);
        
        const rootNodeId = await createASTNode(ast); // Save the root node and get its ID

        const newRule = await prisma.rule.create({
            data: {
                ruleString,
                ast: { connect: { id: rootNodeId } } // Connect the new rule to the root AST node
            },
        });

        // Send a response with the newly created rule's ID and success message
        res.status(201).json({
            message: 'Rule created successfully!',
            id: newRule.id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the rule.' });
    }
});



// POST /api/rules/evaluate
// POST /api/rules/evaluate
app.post('/api/rules/evaluate', async (req: Request, res: Response): Promise<void> => {
    try {
        const { ruleId, data } = req.body;

        // Log received data
        console.log('Received Rule ID:', ruleId);
        console.log('Received Data:', data);

        const rule = await prisma.rule.findUnique({
            where: { id: ruleId },
            include: {
                ast: {
                    include: {
                        left: {
                            include: {
                                left: true,
                                right: true
                            }
                        },
                        right: {
                            include: {
                                left: true,
                                right: true
                            }
                        }
                    }
                }
            },
        });
        console.log("Rule: ",JSON.stringify(rule));
        if (!rule) {
            res.status(404).json({ message: 'Rule not found' });
            return; // Ensure we stop execution here
        }

        const result = evaluateAST(rule.ast, data);

        res.status(200).json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while evaluating the rule.' });
    }
});



const evaluateAST = (node: any, data: any): boolean => {
    // Evaluate leaf nodes (operands)
    if (node.type === 'operand') {
        // Split by whitespace while keeping quotes intact
        const parts = node.value.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*([><=])\s*(.+)/);
        
        if (!parts) {
            console.warn(`Failed to parse operand: ${node.value}`);
            return false; // In case the parsing fails
        }

        const field = parts[1]; // The first part is the field
        const operator = parts[2]; // The second part is the operator
        const value = parts[3].replace(/['"]/g, '').trim(); // Remove quotes from the value

        // Log the parsed components for debugging
        console.log(`Field: ${field}, Operator: ${operator}, Value: ${value}`);

        // Check if the field exists in the provided data
        if (!(field in data)) {
            console.warn(`Field "${field}" not found in provided data.`);
            return false; // If the field doesn't exist, return false
        }

        const fieldValue = data[field];

        // Determine if the comparison value is numeric
        const isNumeric = !isNaN(parseFloat(value));
        if (isNumeric) {
            const numericValue = parseFloat(value);
            switch (operator) {
                case '>': return fieldValue > numericValue;
                case '<': return fieldValue < numericValue;
                case '=': return fieldValue === numericValue;
                default: return false;
            }
        } else {
            // Handle string comparisons
            switch (operator) {
                case '=': return fieldValue === value; // Direct comparison for strings
                default: return false; // Other operators are not applicable for strings
            }
        }
    }

    // Evaluate operator nodes
    if (node.type === 'operator') {
        const leftResult = evaluateAST(node.left, data);
        const rightResult = evaluateAST(node.right, data);
        return node.value === 'AND' ? leftResult && rightResult : leftResult || rightResult;
    }

    return false; // Fallback case
};







// GET /api/rules
app.get('/api/rules', async (req: Request, res: Response): Promise<void> => {
    try {
        const rules = await prisma.rule.findMany({
            select: {
                id: true,            // Return rule ID
                ruleString: true,    // Return the rule string
                ast: {               // Include the AST structure
                    select: {
                        id: true,    // Include AST node ID for clarity
                        type: true,
                        value: true,
                        leftId: true,
                        rightId: true,
                    }
                }
            }
        });
        res.status(200).json(rules);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching rules.' });
    }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
