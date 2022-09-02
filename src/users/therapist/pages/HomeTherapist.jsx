import React from 'react';
import BaseDashboard from '../../../components/bases/dashboard/BaseDashboard';
import { useAuth } from '../../../providers/auth/Auth';
import useTherapistService from '../useTherapistService';

const HomeTherapist = () => {
    const auth = useAuth();
    const service = useTherapistService();

    return (
        <BaseDashboard user={auth.user} getDashboard={service.getDashboard} getReport={service.getReport} />
    );
};

export default HomeTherapist;
