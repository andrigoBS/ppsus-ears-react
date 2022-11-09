import React from 'react';
import { BsDownload } from 'react-icons/all';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import GenericTable from '../../lists/table/GenericTable';
import useBaseConsultController from './useBaseConsultController';
import useBaseConsultStyles from './useBaseConsultStyles';

const BaseConsult = ({ children, handleSubmit, headers, serviceFunction, tableProperties, title }) => {
    const styles = useBaseConsultStyles();
    const { onSubmit, rows } = useBaseConsultController(serviceFunction);

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography component='h4' variant='h4' style={{ marginBottom: 15 }}>
                        Consultar {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography style={{ fontSize: '22px', fontWeight: 'bold' }} color={'primary'}>
                            Filtros
                        </Typography>
                        <Paper sx={styles.paper}>
                            <Box>
                                <Grid container spacing={2}>
                                    {children}
                                    <Grid item xs={12} sm={12} md={12}>
                                        <Button sx={styles.finalButton}
                                            color="secondary"
                                            type="submit"
                                            variant="contained">
                                            Aplicar Filtro
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </form>

                </Grid>

                <Grid item xs={12} sm={12} md={9}>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold' }} color={'primary'}>
                        {title}
                    </Typography>
                    <Paper sx={styles.paper}>
                        <div style={{ float: 'right', marginBottom: 10 }}>
                            <Button sx={{ marginRight: 1 }}
                                startIcon={<BsDownload/>}
                                color="secondary"
                                type="submit"
                                variant="contained">
                                Excel
                            </Button>
                            <Button startIcon={<BsDownload/>}
                                color="secondary"
                                type="submit"
                                variant="contained">
                                PDF
                            </Button>
                        </div>

                        <GenericTable headers={headers} rows={rows} properties={tableProperties}/>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
export default BaseConsult;
