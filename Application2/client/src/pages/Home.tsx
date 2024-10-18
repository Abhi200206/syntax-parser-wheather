import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

const Home: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any[]>([]);
    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/latest');
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Live Weather Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {weatherData.map((item) => (
                    <WeatherCard key={item.city} city={item.city} data={item.data} />
                ))}
            </div>
        </div>
    );
};

export default Home;
