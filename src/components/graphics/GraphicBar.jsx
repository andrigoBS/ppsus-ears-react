import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';
import { getGraphicColors } from '../../Theme';

Chart.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip);

export function GraphicBar({ title, labels, quantities, onClickElement, isVertical }) {
    const options = {
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                font: {
                    size: 14
                },
                display: true,
                text: title
            },
        },
        indexAxis: isVertical? 'y' : 'x',
        onClick: (_event, element) => {
            onClickElement(element[0].index);
        }
    };

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Bebês',
                data: quantities,
                barPercentage: 0.75,
                backgroundColor: getGraphicColors(0.5),
                borderColor: getGraphicColors(1),
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    };

    return (
        <Bar type={'bar'} data={data} options={options}/>
    );
}
