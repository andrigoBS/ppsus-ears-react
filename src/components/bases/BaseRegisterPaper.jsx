import { Box, Button, Grid, Paper, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useViewConfiguration } from '../../providers/viewConfiguration/ViewConfiguration';
import HtmlHead from '../HtmlHead';

import React from 'react';

const createStyles = (theme) => ({
    paper: {
        margin: '0px',
        padding: '30px',

        [theme.breakpoints.up('sm')]: {
            margin: '40px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '10%',
            marginRight: '10%',
        },
    },
    grid: {
        display: 'grid',
        gap: 2,
        width: 'auto',
        [theme.breakpoints.up('xl')]: {
            width: '1200px',
        },
    },
    textTitle:{
        marginBottom: '40px',
    },
    finalButton: {
        marginTop: '35px',
        width: 'fit-content',
    },
});

const BaseRegisterPaper = ({ children, serviceFunction, title, handleSubmit, notSubmitButton }) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const navigate = useNavigate();
    const configuration = useViewConfiguration();

    const onSubmit = (data) => {
        serviceFunction(data).then((response) => {
            if(response.isSuccess){
                navigate(configuration.baseRoute);
            }
        });
    };

    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={title} subTitle={'Cadastro'}/>
            <Typography sx={styles.textTitle} variant={'h4'}>
                Cadastrar {title}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <Grid container spacing={2}>
                        {children}
                        {!notSubmitButton && <Grid item xs={12} sm={12} md={12}>
                            <Button sx={styles.finalButton}
                                color="secondary"
                                type="submit"
                                variant="contained">
                                Finalizar cadastro
                            </Button>
                        </Grid>}
                    </Grid>
                </Box>
            </form>
        </Paper>
    );
};
export default BaseRegisterPaper;
