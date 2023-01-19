import React from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { TbCheckupList, TbPresentation } from 'react-icons/tb';

const data = [
    { options: [
        {
            subOptions: [
                {
                    icon: <TbCheckupList size={27}/>,
                    label: 'Triagem',
                    route: '/fono/triagem/cadastro'
                }
            ],
            subTitle: 'Resultados',
        },
        {
            subOptions: [
                {
                    icon: <TbPresentation size={25}/>,
                    label: 'Indicador',
                    route: '/fono/indicador/cadastro'
                },
                {
                    icon: <BsFileEarmarkText size={25}/>,
                    label: 'Orientação',
                    route: '/fono/orientacao/cadastro'
                },
                {
                    icon: <BsFileEarmarkText size={25}/>,
                    label: 'Conduta',
                    route: '/fono/conduta/cadastro'
                },
                {
                    icon: <AiOutlineTool size={27}/>,
                    label: 'Equipamento',
                    route: '/fono/equipamento/cadastro'
                },
            ],
            subTitle: 'Parâmetros',
        }
    ],
    title: 'Cadastrar'
    },
    { options: [
        {
            subOptions: [
                {
                    icon: <TbCheckupList size={27}/>,
                    label: 'Triagens',
                    route: '/fono/triagem'
                },
            ],
            subTitle: 'Resultados',
        },
        {
            subOptions: [
                // {
                //     icon: <FaBaby size={25}/>,
                //     label: 'Bebês',
                //     route: '/fono/bebe'
                // },
                {
                    icon: <TbPresentation size={25}/>,
                    label: 'Indicadores',
                    route: '/fono/indicador'
                },
                {
                    icon: <BsFileEarmarkText size={25}/>,
                    label: 'Orientações',
                    route: '/fono/orientacao'
                },
                {
                    icon: <BsFileEarmarkText size={25}/>,
                    label: 'Condutas',
                    route: '/fono/conduta'
                },
                {
                    icon: <AiOutlineTool size={27}/>,
                    label: 'Equipamentos',
                    route: '/fono/equipamento'
                },
            ],
            subTitle: 'Parâmetros',
        }
    ],
    title: 'Consultar'
    },
    // { options: [
    //     {
    //         icon: <GoGraph size={25}/>,
    //         label: 'Gráficos',
    //         route: '/fono/'
    //     }
    // ],
    // title: 'Outros'
    // }
];

export default data;
