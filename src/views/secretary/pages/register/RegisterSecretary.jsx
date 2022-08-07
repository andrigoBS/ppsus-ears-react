import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const RegisterSecretary = ({ register, configuration }) => {
    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('name')} label="Nome secretaria" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('state')} label="Estado" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('city')} label="Cidade" variant="outlined" size="small" required/>
            </Grid>
        </React.Fragment>
    );
};
export default RegisterSecretary;
