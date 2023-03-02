import React from 'react';
import { Typography } from '@mui/material';
import BaseDashboard from '../../../components/bases/dashboard/BaseDashboard';
import { useAuth } from '../../../providers/auth/Auth';
import useTherapistService from '../useTherapistService';
import MenuConsultPaper from './home/MenuConsultationPaper';
import MenuRegisterPaper from './home/MenuRegisterPaper';


const HomeTherapist = () => {
    const auth = useAuth();
    const service = useTherapistService();

    return (
        <div style={{ margin: 10, marginTop: 20 }}>
            <Typography component='h4' variant='h4' style={{ marginBottom: 15 }}>
                Olá Karol
            </Typography>

            <div style={{ margin: 10 }}>
                <MenuRegisterPaper/>
                <MenuConsultPaper/>
            </div>

            <Typography style={{ fontSize: '22px', fontWeight: 'bold',  marginLeft: 10, marginTop: 10 }} color={'primary'}>
                Gráficos
            </Typography>
            <BaseDashboard user={auth.user} getDashboard={service.getDashboard} getReport={service.getReport} />

        </div>

    );
};

export default HomeTherapist;
