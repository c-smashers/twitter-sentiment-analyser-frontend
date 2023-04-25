import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = (props) => {
    const data = {
        labels: ['Negative', 'Neutral', 'Partially Positive', 'Positive'],
        datasets: [
            {
                label: 'Sentiments (%)',
                data: props.data,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(34, 245, 140,0.6)', 'rgba(39, 245, 73,0.6)'],
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