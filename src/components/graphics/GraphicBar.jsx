import React from 'react';
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getGraphicColors } from '../../Theme';

Chart.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip);

export function GraphicBar({ isVertical, labels, onClickElement, quantities, title }) {
    const options = {
        indexAxis: isVertical? 'y' : 'x',
        onClick: (_event, element) => {
            onClickElement(element[0].index);
        },
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                font: {
                    size: 14
                },
                text: title
            },
        }
    };

    const data = {
        datasets: [
            {
                backgroundColor: getGraphicColors(0.5),
                barPercentage: 0.75,
                borderColor: getGraphicColors(1),
                borderWidth: 1,
                data: quantities,
                hoverOffset: 4,
                label: 'Bebês',
            },
        ],
        labels: labels,
    };

    return (
        <Bar type={'bar'} data={data} options={options}/>
    );
}
