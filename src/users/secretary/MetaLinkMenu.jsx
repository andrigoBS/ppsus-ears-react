import React from 'react';
import { GoGraph } from 'react-icons/go';
import { TbCheckupList } from 'react-icons/tb';

const getData = (isState) => {
    const data = [
        {
            options: [
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Gráficos'
                }
            ],
            title: 'Outros'
        }
    ];

    if(isState) {
        data[0].options = [
            {
                icon: <TbCheckupList size={27}/>,
                label: 'Gerenciar Regiões',
                route: '/secretaria/gerenciar-regioes'
            },
            ...data[0].options
        ];
    }

    return data;
};

export default getData;
