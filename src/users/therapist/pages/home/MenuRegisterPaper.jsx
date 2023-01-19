import React from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { TbCheckupList } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

const MenuRegisterPaper = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Typography style={{ fontSize: '22px', fontWeight: 'bold' }} color={'primary'}>
                Cadastrar
            </Typography>

            <Paper sx={{ maxWidth: 600, padding: 2  }}>
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography style={{ fontWeight: 'bold' }} >
                                Resultados
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Button color={'secondary'} startIcon={<TbCheckupList/>}
                                onClick={() => { navigate('/fono/triagem/cadastro'); }}
                            >
                                Triagem
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Typography style={{ fontWeight: 'bold', marginTop: 10 }}>
                                Parâmetros
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Button color={'secondary'}
                                startIcon={<BsFileEarmarkText/>}
                                onClick={() => { navigate('/fono/orientacao/cadastro'); }}
                            >
                                Orientação
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Button color={'secondary'}
                                startIcon={<BsFileEarmarkText/>}
                                onClick={() => { navigate('/fono/conduta/cadastro'); }}
                            >
                                Conduta
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Button color={'secondary'} startIcon={<AiOutlineTool/>}
                                onClick={() => { navigate('/fono/equipamento/cadastro'); }}
                            >
                                Equipamento
                            </Button>
                        </Grid>

                    </Grid>
                </Box>
            </Paper>
        </div>
    );
};

export default MenuRegisterPaper ;
