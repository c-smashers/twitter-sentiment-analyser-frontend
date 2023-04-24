import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = (props) => {
    const data = {
        labels: ['Negative', 'Neutral', 'Positive', 'Other'],
        datasets: [
            {
                label: 'Sentiments (%)',
                data: props.data,
                backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(41, 253, 100,0.7)', 'rgba(209, 208, 205,0.7)'],
            }
        ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pie Chart',
            },
        },
    };

    return (
        <Pie data={data} options={options} />
    )
}

export default PieChart