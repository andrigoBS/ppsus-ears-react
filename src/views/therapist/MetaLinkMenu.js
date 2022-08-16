import React from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { FaBaby } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { TbCheckupList, TbPresentation } from 'react-icons/tb';

const data = [
    { title: 'Cadastrar',
        options: [
            {
                icon: <TbCheckupList size={27}/>,
                label: 'Triagem',
                route: '/fono/triagem/cadastro'
            },
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
        ]
    },
    { title: 'Consultar',
        options: [
            {
                icon: <FaBaby size={25}/>,
                label: 'Bebês',
                route: '/fono/bebe'
            },
            {
                icon: <TbCheckupList size={27}/>,
                label: 'Triagens',
                route: '/fono/triagem'
            },
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
        ]
    },
    { title: 'Outros',
        options: [
            {
                icon: <GoGraph size={25}/>,
                label: 'Gráficos',
                route: '/fono/'
            }
        ]
    }
];

export default data;
