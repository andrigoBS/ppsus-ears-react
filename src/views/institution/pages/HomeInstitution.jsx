import BaseDashboard from '../../../components/bases/BaseDashboard';
import React, { useEffect } from 'react';
import Table from '../../../components/lists/Table';
import { useAuth } from '../../../providers/auth/Auth';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const HomeInstitution = () => {
    const auth = useAuth();
    const configuration = useViewConfiguration();

    return (
        <React.Fragment>
            <BaseDashboard user={auth.user} getDashboard={configuration.service.getDashboard} getReport={configuration.service.getReport} />
            <Table/>

        </React.Fragment>

    );
};

export default HomeInstitution;
