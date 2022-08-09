import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const RegisterEquipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Equipamento'} serviceFunction={configuration.service.equipmentRegister}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('model')} label="Modelo" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('brand')} label="Marca" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('dateOfLastCalibration')} label="Data última calibração" variant="outlined" size="small"  type="date" InputLabelProps={{ shrink: true }} required/>
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterEquipment;