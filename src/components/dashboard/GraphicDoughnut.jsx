import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Chart} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColors = [
    'rgb(232, 50, 104, 0.5)',
    'rgba(45, 183, 188, 0.5)',
    'rgba(251, 188, 67, 0.5)',
    'rgba(93, 48, 122, 0.5)',
];

const borderColors = [
    'rgba(232, 50, 104, 1)',
    'rgba(45, 183, 188, 1)',
    'rgba(251, 188, 67, 1)',
    'rgba(93, 48, 122, 1)'

]

function getBackgroundColor(index){
    return backgroundColors[index];
}

function getBorderColor(index){
    return borderColors[index];
}

function formatBorderColorsList(colorsList){
    let colorsListFormatted = [];

    for (let i = 0; i < colorsList.length; i++) {
        let color = colorsList[i];
        let borderColor = getBorderColor(color);

        colorsListFormatted.push(borderColor)
    }
    return colorsListFormatted;
}

function formatBackgroundColorsList(colorsList){
    let colorsListFormatted = [];

    for (let i = 0; i < colorsList.length; i++) {
        let color = colorsList[i];
        let backgroundColor = getBackgroundColor(color);

        colorsListFormatted.push(backgroundColor)
    }
    return colorsListFormatted;
}

function setData(labels, colors, quantities){
    let borderColorsFormatted = formatBorderColorsList(colors);
    let backgroundColorsFormatted = formatBackgroundColorsList(colors);

    return {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: quantities,
                backgroundColor: backgroundColorsFormatted,
                borderColor: borderColorsFormatted,
                borderWidth: 1,
                hoverOffset: 4
            },
        ],

    }
}
// export const data = {
//     labels: ['Passou', 'Falhou'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [10, 5],
//             backgroundColor: [
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//             ],
//             borderWidth: 1,
//         },
//     ],
//     plugins: {
//         title: {
//             display: true,
//             text: 'Doughnut Chart',
//             color: 'blue',
//             font: {
//                 size: 34
//             }
//         }
//     }
// };

// export const options = {
//
//         title: {
//             display: true,
//             text: 'Doughnut Chart',
//             color:'blue',
//             font: {
//                 size:34
//             },
//
//         }
//
//
// }
//
// function ctx() {
//
// }
//
// export const chart = new Chart(ctx(), {
//     type: 'doughnut',
//     data: [1,2],
//     options: {
//         plugins: {
//             legend: {
//                 position: 'bottom'
//             }
//         }
//     }
// });


export function GraphicDoughnut({labels,colors,quantities}) {
    return (
        <div>
            <h5>Bar Example (custom size)</h5>
            <Doughnut type={'doughnut'} data={setData(labels,colors,quantities)}/>
        </div>
    );
}
