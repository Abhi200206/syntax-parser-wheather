import React from 'react';

interface WeatherCardProps {
    city: string;
    data: {
        temperature: number;
        feelsLike: number;
        condition: string;
        timestamp: number;
    };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, data }) => {
    const date = new Date(data.timestamp * 1000).toLocaleString();

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold">{city}</h3>
            <p>Temperature: {data.temperature.toFixed(2)} °C</p>
            <p>Feels Like: {data.feelsLike.toFixed(2)} °C</p>
            <p>Condition: {data.condition}</p>
            <p>Last Updated: {date}</p>
        </div>
    );
};

export default WeatherCard;
