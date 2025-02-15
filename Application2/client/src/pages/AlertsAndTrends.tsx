import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const AlertsAndTrends: React.FC = () => {
    const [alerts, setAlerts] = useState<any[]>([]);
    const [historicalData, setHistoricalData] = useState<any[]>([]);

    useEffect(() => {
        fetchAlerts();
        fetchHistoricalData();
    }, []);

    const fetchAlerts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/alerts');
            setAlerts(response.data);
        } catch (error) {
            console.error('Error fetching alerts:', error);
        }
    };

    const fetchHistoricalData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/historical');
            setHistoricalData(response.data);
        } catch (error) {
            console.error('Error fetching historical data:', error);
        }
    };

    const formatChartData = () => {
        const labels = historicalData.map((entry) =>
            new Date(entry.timestamp).toLocaleString()
        );
        const temperatures = historicalData.map((entry) => entry.temperature);

        return {
            labels,
            datasets: [
                {
                    label: 'Temperature Over Time',
                    data: temperatures,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
            ],
        };
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Historical Trends and Alerts</h2>
            <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
                {historicalData.length > 0 ? (
                    <Line data={formatChartData()} />
                ) : (
                    <p>Loading historical data...</p>
                )}
            </div>
            <h2 className="text-2xl font-bold mb-4">Active Alerts</h2>
            <div className="bg-red-100 p-6 shadow-lg rounded-lg">
                {alerts.length > 0 ? (
                    alerts.map((alert) => (
                        <div key={alert.id} className="mb-4">
                            <p className="font-semibold">{alert.city}</p>
                            <p>{alert.alertType} at {new Date(alert.timestamp).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No active alerts</p>
                )}
            </div>
        </div>
    );
};

export default AlertsAndTrends;
