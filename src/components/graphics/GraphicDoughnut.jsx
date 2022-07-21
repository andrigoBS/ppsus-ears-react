import React from 'react';
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {getGraphicColors} from "../../Theme";

Chart.register(ArcElement, Tooltip, Legend, Title);

export function GraphicDoughnut({title, labels, quantities, onClickElement}) {
    const options = {
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: title
            },
        },
        onClick: (_event, element) => {
            onClickElement(element[0].index);
        }
    };

    const data = {
        labels: labels,
        datasets: [
            {
                data: quantities,
                backgroundColor: getGraphicColors(0.5),
                borderColor: getGraphicColors(1),
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    };

    return (
        <Doughnut type={'doughnut'} data={data} options={options}/>
    );
}
