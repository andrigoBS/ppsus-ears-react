import { GoGraph } from 'react-icons/go';
import BaseDashboard from '../../../components/bases/BaseDashboard';
import React, { useEffect } from 'react';
import { useAuth } from '../../../providers/auth/Auth';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const HomeTherapist = () => {
    const auth = useAuth();
    const configuration = useViewConfiguration();

    const data = [
        { title: 'Cadastrar',
            options: [
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Bebê'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Triagem'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Indicador'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Observação'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Conduta'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Equipamento'
                },
            ]
        },
        { title: 'Consultar',
            options: [
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Bebês'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Triagens'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Indicadores'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Observações'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Condutas'
                },
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Equipamentos'
                },
            ]
        },
        { title: 'Outros',
            options: [
                {
                    icon: <GoGraph size={25}/>,
                    label: 'Gráficos'
                }
            ]
        }
    ];

    useEffect(() => configuration.setLinkMenu(data), []);

    return (
        <BaseDashboard user={auth.user} getDashboard={configuration.service.getDashboard} getReport={configuration.service.getReport} />
    );
};

export default HomeTherapist;
