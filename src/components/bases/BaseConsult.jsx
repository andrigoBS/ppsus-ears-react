import { Box, Button, Divider, Grid, Paper, TextField, Typography, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import { useViewConfiguration } from '../../providers/viewConfiguration/ViewConfiguration';

import React from 'react';
import HtmlHead from '../HtmlHead';
import GenericTable from '../lists/GenericTable';

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
        marginTop: '10px',
        marginBottom: '10px',
        width: 'fit-content',
    },
});

const BaseConsult = ({ children, serviceFunction, handleSubmit, headers, rows, title }) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    const onSubmit = (data) => {
        serviceFunction(data).then((response) => {
            // if(response.isSuccess){

            // }
        });
    };

    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={title} subTitle={'Consultar'}/>
            <Typography sx={styles.textTitle} variant={'h4'}>
                Consultar {title}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <Grid container spacing={2}>
                        {children}
                        <Grid item xs={12} sm={12} md={12}>
                            <Button sx={styles.finalButton}
                                color="secondary"
                                type="submit"
                                variant="contained">
                                Consultar
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Divider />
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <GenericTable headers={headers} rows={rows}/>
        </Paper>
    );
};
export default BaseConsult;
