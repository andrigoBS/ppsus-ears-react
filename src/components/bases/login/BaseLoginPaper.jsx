import { Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../../../views/site/components/Footer';
import Partners from '../../../views/site/components/Partners';
import HtmlHead from '../../HtmlHead';
import TopicListIcon from '../../lists/TopicListIcon';
import useBaseLoginController from './useBaseLoginController';
import useBaseLoginStyles from './useBaseLoginStyles';

const BaseLoginPaper = ({ registerRoute }) => {
    const styles = useBaseLoginStyles();
    const { register, handleSubmit, configuration, onSubmit } = useBaseLoginController();

    return (
        <>
            <HtmlHead view={configuration.title} subTitle={'Login'}/>
            <Grid container sx={styles.container}>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper sx={styles.paper}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography variant={'h4'} color={'primary'}>
                                        Seja bem-vindo a {configuration.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography variant={'h6'} color={'primary'} style={styles.subtitle}>
                                        Para continuar é preciso que você se identifique, insira abaixo suas informações de acesso:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField  {...register('login')} label="Login" variant="outlined" size="small" required/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField  {...register('password')} label="Senha" type="password" variant="outlined" size="small" required/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Button
                                        color="secondary"
                                        type="submit"
                                        variant="contained">
                                        Entrar
                                    </Button>
                                </Grid>
                                {registerRoute &&
                                    <>
                                        <Grid item xs={12}>
                                            <Divider><Typography variant={'h5'}>Ou</Typography></Divider>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <RouterLink to={configuration.baseRoute + registerRoute}>
                                                Clique aqui para se cadastrar
                                            </RouterLink>
                                        </Grid>
                                    </>
                                }
                                <Grid item xs={12} sm={12} md={12} sx={styles.forgotPassword}>
                                    <RouterLink to={configuration.baseRoute + '/esqueci-minha-senha'}>
                                        Esqueci minha senha
                                    </RouterLink>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Partners color={styles.partnersColor}/>
                    <Footer/>
                </Grid>
            </Grid>
        </>
    );
};

export default BaseLoginPaper;
