import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Código', name: 'id' },
    { title: 'Modelo', name: 'model' },
    { title: 'Marca', name: 'brand' },
    { title: 'Data última calibração', name: 'dateOfLastCalibration', formatter: 'date' }
];

const ListEquipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Equipamentos'} serviceFunction={configuration.service.getAllEquipments} headers={headers}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('model')} label="Modelo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('brand')} label="Marca" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('dateOfLastCalibration')} label="Data última calibração" variant="outlined"
                    size="small" type="date" InputLabelProps={{ shrink: true }}/>
            </Grid>
        </BaseConsult>
    );
};
export default ListEquipment;
