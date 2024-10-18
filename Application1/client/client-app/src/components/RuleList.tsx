import { useEffect, useState } from 'react';
import axios from 'axios';

const RuleList = () => {
    const [rules, setRules] = useState<any[]>([]);

    const fetchRules = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/rules'); // Ensure this matches your backend URL
            setRules(response.data);
        } catch (error) {
            console.error('Error fetching rules:', error);
        }
    };

    useEffect(() => {
        fetchRules();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Rules List</h2>
            <ul className="space-y-4">
                {rules.length > 0 ? (
                    rules.map((rule) => (
                        <li key={rule.id} className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition duration-200">
                            <p className="text-lg font-medium">
                                <span className="text-gray-500">ID:</span> {rule.id}
                            </p>
                            <p className="text-lg font-medium">{rule.ruleString}</p>
                            <button 
                                className="mt-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Evaluate
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="text-center text-gray-600">No rules available.</li>
                )}
            </ul>
        </div>
    );
};

export default RuleList;
