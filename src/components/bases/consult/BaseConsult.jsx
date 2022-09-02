import React from 'react';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import HtmlHead from '../../../components/HtmlHead';
import GenericTable from '../../lists/table/GenericTable';
import useBaseConsultController from './useBaseConsultController';
import useBaseConsultStyles from './useBaseConsultStyles';

const BaseConsult = ({ children, handleSubmit, headers, serviceFunction, title }) => {
    const styles = useBaseConsultStyles();
    const { onSubmit, rows } = useBaseConsultController(serviceFunction);

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
