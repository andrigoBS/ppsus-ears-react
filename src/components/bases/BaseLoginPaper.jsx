import React from "react";
import {Button, Paper, TextField, Typography, Grid, useTheme, Link} from "@mui/material";
import {Link as RouterLink, Navigate} from 'react-router-dom';
import HtmlHead from "../HtmlHead";
import {useForm} from "react-hook-form";
import MPAWhiteIcon from "../icons/MPAWhiteIcon";
import {useAuth} from "../../providers/auth/Auth";
import {useViewConfiguration} from "../../providers/viewConfiguration/ViewConfiguration";

const createStyles = (theme) => {
    return {
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
            backgroundColor: theme.palette.primary.main,
            padding: "20px",
            borderRadius: '10px'
        },
        // triangle: {
        //     backgroundColor: theme.palette.secondary.main,
        //     clipPath: 'polygon(0 0, 50% 0, 0 100%)',
        //     height: '700px',
        //     position: 'absolute',
        //     left: 0,
        //     top: '72px',
        //     right: 0,
        // },
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
        <Paper sx={styles.paper}>
            <HtmlHead view={configuration.title} subTitle={'Login'}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={12}>
                        <RouterLink to={'/'}>
                            <MPAWhiteIcon size={'28rem'} sx={styles.icon}/>
                        </RouterLink>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant={"h4"} color={'primary'}>
                            Seja bem-Vindo a {configuration.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant={"h6"} color={'primary'}>
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
    );
}

export default BaseLoginPaper;