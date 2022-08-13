import { Button, Divider, Grid, Paper, TextField, Typography, useTheme } from '@mui/material';
import Footer from '../../views/site/components/Footer';
import HtmlHead from '../HtmlHead';
import LoginUX from '../icons/login/Prancheta 9.svg';
import Partners from '../../views/site/components/Partners';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../providers/auth/Auth';
import { useForm } from 'react-hook-form';
import { useViewConfiguration } from '../../providers/viewConfiguration/ViewConfiguration';

const createStyles = (theme) => {
    return {
        container: {
            backgroundColor: theme.palette.secondaryBlue.main,

            [theme.breakpoints.up('sm')]: {
                backgroundColor: undefined,
                backgroundImage: `url("${LoginUX}")`,
                backgroundSize: 'auto 36%',
                backgroundPosition: '0px -1%',
            },

            [theme.breakpoints.up('md')]: {
                backgroundSize: 'auto 54%',
                backgroundPosition: '0px -31%',
            },

            [theme.breakpoints.up('lg')]: {
                backgroundSize: 'auto 70%',
                backgroundPosition: '0px -110%',
            },

            [theme.breakpoints.up('xl')]: {
                backgroundSize: 'auto 103%',
                backgroundPosition: '0px -582px',
            },
        },
        paper: {
            margin: '0px',
            padding: '30px',

            [theme.breakpoints.up('sm')]: {
                margin: '40px',
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: '12%',
                marginRight: '12%',
            },
            [theme.breakpoints.up('lg')]: {
                marginLeft: '23%',
                marginRight: '23%',
            },
            textAlign: 'center'
        },
        icon: {
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
        },
        iconHeart: {

        },
        loginDescription: {
            fontSize: '14px'
        }
    };
};

const BaseLoginPaper = ({ registerRoute }) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const auth = useAuth();
    const configuration = useViewConfiguration();

    const onSubmit = (data, event) => {
        event.preventDefault();
        auth.login(data.login, data.password);
    };

    return (
        <>
            <HtmlHead view={configuration.title} subTitle={'Login'} />
            <Grid container sx={styles.container}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper sx={styles.paper}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography variant={'h4'} color={'primary'}>
                                        Seja bem-vindo a {configuration.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Typography variant={'h6'} color={'primary'} style={{ fontSize: '14px' }}>
                                        Para continuar é preciso que você se identifique, insira abaixo suas informações de acesso:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField  {...register('login')} label="Login" variant="outlined" size="small" required />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField  {...register('password')} label="Senha" type="password" variant="outlined" size="small" required />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{ marginBottom: '20px' }}>
                                    <Button
                                        color="secondary"
                                        type="submit"
                                        variant="contained">
                                        Entrar
                                    </Button>
                                </Grid>
                                {registerRoute &&

                                    <Grid container >
                                        <Grid sx={{ marginTop: '20px', marginBottom: '20px' }} item md={5} xs={5}>
                                            <Divider />
                                        </Grid>
                                        <Grid item md={2} xs={2}>
                                            <Typography variant={'h5'}>
                                                Ou
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ marginTop: '20px', marginBottom: '20px' }} item md={5} xs={5}>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <RouterLink to={configuration.baseRoute + registerRoute}>
                                                Clique aqui para se cadastrar
                                            </RouterLink>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Typography color={'primary'} style={{ fontSize: '16px' }}>
                                                <RouterLink to={configuration.baseRoute + '/esqueci-minha-senha'}>
                                                    Esqueci minha senha
                                                </RouterLink>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Partners color={theme.palette.background.default} />
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
};

export default BaseLoginPaper;
