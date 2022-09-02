import React from 'react';
import { Box, Grid, Paper, TextField, Typography, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import useTherapistService from '../../useTherapistService';

const createStyles = (theme) => ({
    paper: {
        margin: '0px',
        padding: '30px',

        // [theme.breakpoints.up('sm')]: {
        //     margin: '40px',
        // },
        // [theme.breakpoints.up('md')]: {
        //     marginLeft: '10%',
        //     marginRight: '10%',
        // },
    },
    // grid: {
    //     display: 'grid',
    //     gap: 2,
    //     width: 'auto',
    //     [theme.breakpoints.up('xl')]: {
    //         width: '1200px',
    //     },
    // },
    // textTitle:{
    //     marginBottom: '40px',
    // },
    // finalButton: {
    //     marginTop: '10px',
    //     marginBottom: '10px',
    //     width: 'fit-content',
    // },
});

const headers = [
    { name: 'id', title: 'Código' },
    { name: 'model', title: 'Modelo' },
    { name: 'brand', title: 'Marca' },
    { formatter: 'date', name: 'dateOfLastCalibration', title: 'Data última calibração' }
];

const ListEquipmentDemo = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useTherapistService();

    const theme = useTheme();
    const styles = createStyles(theme);

    return(
        <div>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={3} sm={3} md={3}>
                        <Paper sx={styles.paper}>
                            <Typography variant={'h4'}>
                                Filtros
                            </Typography>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField  {...register('model')} label="Modelo" variant="outlined" size="small"/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField  {...register('brand')} label="Marca" variant="outlined" size="small"/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField  {...register('dateOfLastCalibration')} label="Data última calibração" variant="outlined"
                                            size="small" type="date" InputLabelProps={{ shrink: true }}/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={9} sm={9} md={9}>
                        <BaseConsult handleSubmit={handleSubmit} serviceFunction={service.getAllEquipments} headers={headers} />
                    </Grid>
                </Grid>
            </Box>
        </div>
        // <BaseConsult handleSubmit={handleSubmit} title={'Equipamentos'} serviceFunction={configuration.service.getAllEquipments} headers={headers}>
        //     <Grid item xs={12} sm={12} md={12}>
        //         <TextField  {...register('model')} label="Modelo" variant="outlined" size="small"/>
        //     </Grid>
        //     <Grid item xs={12} sm={12} md={6}>
        //         <TextField  {...register('brand')} label="Marca" variant="outlined" size="small"/>
        //     </Grid>
        //     <Grid item xs={12} sm={12} md={6}>
        //         <TextField  {...register('dateOfLastCalibration')} label="Data última calibração" variant="outlined"
        //                     size="small" type="date" InputLabelProps={{ shrink: true }}/>
        //     </Grid>
        // </BaseConsult>
    );
};
export default ListEquipmentDemo;
