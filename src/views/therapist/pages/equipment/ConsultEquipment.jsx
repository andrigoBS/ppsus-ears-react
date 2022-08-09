import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/BaseConsult';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Código', name: 'id' },
    { title: 'Modelo', name: 'model' },
    { title: 'Marca', name: 'brand' },
    { title: 'Data última calibração', name: 'dateOfLastCalibration' }
];

const ConsultEquipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Equipamento'} serviceFunction={configuration.service.getAllEquipments} headers={headers}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('model')} label="Modelo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('brand')} label="Marca" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('dateOfLastCalibration')} label="Data última calibração" variant="outlined" size="small"  type="date" InputLabelProps={{ shrink: true }}/>
            </Grid>
        </BaseConsult>
    );
};
export default ConsultEquipment;