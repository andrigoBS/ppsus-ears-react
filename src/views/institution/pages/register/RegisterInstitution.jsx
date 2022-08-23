import { Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CNPJField from '../../../../components/fileds/CNPJField';
import RadioFieldAsync from '../../../../components/fileds/RadioFieldAsync';
import SelectFieldAsync from '../../../../components/fileds/SelectFieldAsync';

const RegisterInstitution = ({ register, configuration }) => {
    const [state, setState] = useState(null);

    const getCities = () => {
        return configuration.service.getCities(state);
    };

    const onChangeState = (event) => {
        setState(event.target.value);
    };

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Divider/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>Informações sobre a Instituição</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('institution.institutionName')} label="Nome instituição" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('institution.cnes')} label="CNES" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('institution.cnpj')} label="CNPJ" variant="outlined" size="small"/>
                <CNPJField register={register} name="cnpj" label="CNPJ"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <RadioFieldAsync title={'Tipo de instituição'} register={register('institution.institutionType')} getValue={configuration.service.getTypes} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('institution.address.cep')} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('institution.address.street')} label="Logradouro" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={register('institution.address.state')} getValue={configuration.service.getStates} title={'Estado'} onChange={onChangeState} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={register('institution.address.city.id')} getValue={state? getCities : null} title={'Cidade'}
                    watch={state} disabled={!state} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('institution.address.number')} label="Número" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('institution.address.adjunct')} label="Complemento" variant="outlined" size="small"/>
            </Grid>
        </React.Fragment>
    );
};
export default RegisterInstitution;
