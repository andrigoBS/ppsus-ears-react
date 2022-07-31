import BaseDashboard from '../../../components/bases/BaseDashboard';
import React, { useEffect } from 'react';
import { useAuth } from '../../../providers/auth/Auth';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const HomeSecretary = () => {
    const auth = useAuth();
    const configuration = useViewConfiguration();

    return (
        <BaseDashboard user={auth.user} getDashboard={configuration.service.getDashboard} getReport={configuration.service.getReport} />
    );
};

export default HomeSecretary;
