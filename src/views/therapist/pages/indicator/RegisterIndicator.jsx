import { Button, Grid, TextField } from '@mui/material';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const RegisterIndicator = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Indicador de risco'} serviceFunction={configuration.service.indicatorRegister}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('name')} label="Nome do indicador"
                    variant="outlined" size="small" required
                />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterIndicator;
