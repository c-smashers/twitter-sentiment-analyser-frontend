import React from 'react'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);


const BarChart = (props) => {
    const data = {
        labels: ['Negative', 'Neutral', 'Positive', 'Other'],
        datasets: [
            {
                label: 'Sentiments (%)',
                data: props.data,
                backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(41, 253, 100,0.7)', 'rgba(209, 208, 205,0.7)'],
                maxBarThickness: 100
            }
        ]
    }
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart',
            },
            datalabels: {
                color: 'blue',
                labels: {
                    title: {
                        font: {
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            }
        },
    };

    return (
        <Bar data={data} options={options} />
    )
}

export default BarChart