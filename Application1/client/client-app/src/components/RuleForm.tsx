import React, { useState } from 'react';
import axios from 'axios';
import Loading from './Loading'; // Import the Loading component

const RuleForm = () => {
    const [ruleString, setRuleString] = useState('');
    const [message, setMessage] = useState('');
    const [createdRuleId, setCreatedRuleId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false); // State to handle loading

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true before starting the API call
        try {
            const response = await axios.post('http://localhost:5000/api/rules/create', { ruleString });
            setMessage(response.data.message);
            setCreatedRuleId(response.data.id); // Store the created rule ID
            setRuleString('');
        } catch (error) {
            setMessage('Error creating rule.');
            setCreatedRuleId(null); // Reset the ID if there's an error
        } finally {
            setIsLoading(false); // Set loading to false after the API call is complete
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Create New Rule</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={ruleString}
                    onChange={(e) => setRuleString(e.target.value)}
                    placeholder="Enter your rule string"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    rows={4}
                    disabled={isLoading} // Disable input when loading
                />
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
                    disabled={isLoading} // Disable button when loading
                >
                    {isLoading ? 'Submitting...' : 'Create Rule'}
                </button>
                {isLoading && <Loading />} {/* Show loading spinner when isLoading is true */}
                {message && (
                    <p className={`mt-2 text-lg ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {message}{' '}
                        {createdRuleId && <span>Rule ID: {createdRuleId}</span>}
                    </p>
                )}
            </form>
        </div>
    );
};

export default RuleForm;
