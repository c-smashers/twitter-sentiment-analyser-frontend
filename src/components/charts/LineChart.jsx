import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const LineChart = (props) => {
    function countOccurrences(array1, array2) {
        let result = [];
        array1.forEach(element => {
            result.push(array2.filter(item => item === element).length);
        });
        return result;
    }
    const labels = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(countOccurrences(labels, props.data))

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Sentiments (%)',
                data: countOccurrences(labels, props.data),
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
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
                text: 'Line Chart',
            },

            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                font: {
                    weight: 'bold'
                }
            }


        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
    };

    return (
        <Line options={options} data={data} />
    )
}

export default LineChart