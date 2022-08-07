import { Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import RadioField from '../../../../components/fileds/RadioField';

const RegisterInstitution = ({ register, configuration }) => {
    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Divider/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>Informações sobre a Instituição</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('institutionName')} label="Nome instituição" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('cnes')} label="CNES" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('cnpj')} label="CNPJ" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <RadioField title={'Tipo de instituição'} register={register('institutionType')} getValue={configuration.service.getTypes}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('cep')} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('publicArea')} label="Logradouro" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('state')} label="Estado" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('city')} label="Cidade" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('number')} label="Número" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('complement')} label="Complemento" variant="outlined" size="small"/>
            </Grid>
        </React.Fragment>
    );
};
export default RegisterInstitution;
