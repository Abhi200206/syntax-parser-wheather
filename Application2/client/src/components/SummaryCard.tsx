import React from 'react';

interface SummaryCardProps {
    summary: {
        city: string;
        date: string;
        avgTemp: number;
        maxTemp: number;
        minTemp: number;
        dominantCondition: string;
    };
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">{summary.city} - {new Date(summary.date).toLocaleDateString()}</h3>
            <p className="text-gray-700"><span className="font-semibold">Avg Temp:</span> {summary.avgTemp.toFixed(2)} °C</p>
            <p className="text-gray-700"><span className="font-semibold">Max Temp:</span> {summary.maxTemp.toFixed(2)} °C</p>
            <p className="text-gray-700"><span className="font-semibold">Min Temp:</span> {summary.minTemp.toFixed(2)} °C</p>
            <p className="text-gray-700"><span className="font-semibold">Dominant Condition:</span> {summary.dominantCondition}</p>
        </div>
    );
};

export default SummaryCard;
