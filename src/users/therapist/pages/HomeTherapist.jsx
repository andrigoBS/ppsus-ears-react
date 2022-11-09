import React from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { TbCheckupList, TbPresentation } from 'react-icons/tb';
import { Button, Paper, Typography } from '@mui/material';
import BaseDashboard from '../../../components/bases/dashboard/BaseDashboard';
import { useAuth } from '../../../providers/auth/Auth';
import useTherapistService from '../useTherapistService';


const HomeTherapist = () => {
    const auth = useAuth();
    const service = useTherapistService();

    return (
        <div style={{ margin: 10, marginTop: 20 }}>
            <Typography component='h4' variant='h4' style={{ marginBottom: 15 }}>
                Olá Karol
            </Typography>

            <div style={{ display: 'flex', margin: 10 }}>
                <div>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold' }} color={'primary'}>
                        Cadastrar
                    </Typography>

                    <Paper sx={{ maxWidth: 600, padding: 2  }}>
                        <Typography style={{ fontWeight: 'bold' }}>
                            Resultados
                        </Typography>
                        <Button color={'secondary'} startIcon={<TbCheckupList/>}>
                            Triagem
                        </Button>

                        <Typography style={{ fontWeight: 'bold', marginTop: 10 }}>
                            Parâmetros
                        </Typography>
                        <Button sx={{ marginRight: 5 }} color={'secondary'} startIcon={<BsFileEarmarkText/>}>
                            Orientação
                        </Button>

                        <Button sx={{ marginRight: 5 }} color={'secondary'} startIcon={<BsFileEarmarkText/>}>
                            Conduta
                        </Button>

                        <Button color={'secondary'} startIcon={<AiOutlineTool/>}>
                            Equipamento
                        </Button>
                    </Paper>
                </div>

                <div style={{ marginLeft: 10 }}>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold' }} color={'primary'}>
                        Consultar
                    </Typography>

                    <Paper sx={{ maxWidth: 700, padding: 2  }} >
                        <Typography style={{ fontWeight: 'bold' }}>
                            Resultados
                        </Typography>
                        <Button color={'secondary'} startIcon={<TbCheckupList/>}>
                            Triagem
                        </Button>

                        <Typography style={{ fontWeight: 'bold', marginTop: 10 }}>
                            Parâmetros
                        </Typography>
                        <Button sx={{ marginRight: 5 }} color={'secondary'} startIcon={<BsFileEarmarkText/>}>
                            Orientação
                        </Button>

                        <Button sx={{ marginRight: 5 }} color={'secondary'} startIcon={<BsFileEarmarkText/>}>
                            Conduta
                        </Button>

                        <Button sx={{ marginRight: 5 }} color={'secondary'} startIcon={<AiOutlineTool/>}>
                            Equipamento
                        </Button>

                        <Button color={'secondary'} startIcon={<TbPresentation/>}>
                            Indicador
                        </Button>
                    </Paper>
                </div>

            </div>
            <Typography style={{ fontSize: '22px', fontWeight: 'bold',  marginLeft: 10, marginTop: 10 }} color={'primary'}>
                Gráficos
            </Typography>
            <BaseDashboard user={auth.user} getDashboard={service.getDashboard} getReport={service.getReport} />

        </div>

    );
};

export default HomeTherapist;
