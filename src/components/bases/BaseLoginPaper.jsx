import React from "react";
import {Button, Paper, TextField, Typography, Grid, useTheme, Link} from "@mui/material";
import {Link as RouterLink, Navigate} from 'react-router-dom';
import HtmlHead from "../HtmlHead";
import {useForm} from "react-hook-form";
import MPAWhiteIcon from "../icons/MPAWhiteIcon";
import MPAHeartWhiteIcon from "../icons/MPAHeartWhiteIcon";
import {useAuth} from "../../providers/auth/Auth";
import {useViewConfiguration} from "../../providers/viewConfiguration/ViewConfiguration";
import Partners from "../../views/site/components/Partners";
import Footer from "../../views/site/components/Footer";

const createStyles = (theme) => {
    return {
        container:{
            backgroundColor: theme.palette.secondaryBlue.main,
        },
        paper: {
            margin: '0px',
            padding: '30px',

            [theme.breakpoints.up('sm')]: {
                margin: '40px',
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: '20%',
                marginRight: '20%',
            },
            textAlign: 'center'
        },
        icon: {
            padding: "20px",
            borderRadius: '10px',
            textAlign: 'center'
        },
        iconHeart: {

        },
        loginDescription: {
            fontSize: "14px"
        }
    };
}

const BaseLoginPaper = ({registerRoute}) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let auth = useAuth();
    let configuration = useViewConfiguration();

    const onSubmit = (data, event) => {
        event.preventDefault();
        auth.login(data.login, data.password);
    }

    return (
        <>
            <HtmlHead view={configuration.title} subTitle={'Login'}/>
            <Grid container sx={styles.container}>
                <Grid item xs={12} sm={12} md={6}>
                    <MPAHeartWhiteIcon size={'10rem'} sx={styles.iconHeart}/>
                    <RouterLink to={'/'}>
                        <MPAWhiteIcon size={'28rem'} sx={styles.icon}/>
                    </RouterLink>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper sx={styles.paper}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography variant={"h4"} color={'primary'}>
                                        Seja bem-vindo a {configuration.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Typography variant={"h6"} color={'primary'} style={{fontSize: "14px"}}>
                                        Para continuar é preciso que você se identifique, insira abaixo suas informações de acesso:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField  {...register("login")} label="Email" variant="outlined" size="small" required/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField  {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
                                </Grid>
                                {registerRoute &&
                                    <Grid item xs={12} sm={12} md={12}>
                                        <RouterLink to={registerRoute}>
                                            Ainda não possui cadastro? Clique aqui para se cadastrar
                                        </RouterLink>
                                    </Grid>
                                }
                                <Grid item xs={12} sm={12} md={12}>
                                    <Button
                                        color="secondary"
                                        type="submit"
                                        variant="contained">
                                        Entrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Partners color={theme.palette.background.default}/>
                    <Footer/>
                </Grid>
            </Grid>
        </>
    );
}

export default BaseLoginPaper;