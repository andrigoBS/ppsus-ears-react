import { TbWriting } from 'react-icons/tb';
import BaseDashboard from '../../../components/bases/BaseDashboard';
import React, { useEffect } from 'react';
import { useAuth } from '../../../providers/auth/Auth';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const HomeParents = () => {
    const auth = useAuth();
    const configuration = useViewConfiguration();

    const data = [
        { title: 'Consultar',
            options: [
                {
                    icon: <TbCheckupList size={25}/>,
                    label: 'Resultados de triagens'
                }
            ]
        }
    ];

    useEffect(() => configuration.setLinkMenu(data), []);

    return (
        <BaseDashboard user={auth.user} getDashboard={configuration.service.getDashboard} getReport={configuration.service.getReport} />
    );
};

export default HomeParents;
