import { useState } from 'react';
import axios from 'axios';
import Loading from './Loading'; // Import the Loading component

const EvaluateRule = () => {
    const [ruleId, setRuleId] = useState('');
    const [jsonData, setJsonData] = useState('');
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const handleEvaluate = async () => {
        try {
            setIsLoading(true); // Set loading to true before API call
    
            // Parse ruleId as an integer
            const rule = parseInt(ruleId);
    
            // Check if rule is a valid number
            if (isNaN(rule)) {
                setResult('Please enter a valid Rule ID.');
                setIsLoading(false);
                return;
            }
    
            // Parse the JSON data into an object
            const data = JSON.parse(jsonData);
    
            // Log the values being sent
            console.log('Sending Rule ID:', rule);
            console.log('Sending Data:', data);
    
            const response = await axios.post(`http://localhost:5000/api/rules/evaluate`, { ruleId: rule, data });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error evaluating rule:', error); // Log the error
            setResult('Error evaluating rule.');
        } finally {
            setIsLoading(false); // Set loading to false after the API call
        }
    };
    

    return (
        <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">Evaluate Rule</h2>

            <input
                type="text"
                placeholder="Enter Rule ID"
                value={ruleId}
                onChange={(e) => setRuleId(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                disabled={isLoading} // Disable input while loading
            />
            <textarea
                placeholder='Enter JSON data (e.g., {"age": 30, "salary": 60000, "department": "Sales"})'
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                rows={4}
                disabled={isLoading} // Disable textarea while loading
            />
            <button 
                onClick={handleEvaluate} 
                className="w-full bg-white text-blue-600 p-3 rounded-md hover:bg-gray-200 transition duration-200 shadow-md"
                disabled={isLoading} // Disable button while loading
            >
                {isLoading ? 'Evaluating...' : 'Evaluate'} {/* Change button text while loading */}
            </button>

            {isLoading && <Loading />} {/* Display loading spinner when isLoading is true */}

            {result !== null && (
                <p className={`mt-4 text-lg ${result ? 'text-green-300' : 'text-red-300'} text-center`}>
                    Result: {result.toString()}
                </p>
            )}
        </div>
    );
};

export default EvaluateRule;
