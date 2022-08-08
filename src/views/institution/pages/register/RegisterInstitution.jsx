import { Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import RadioField from '../../../../components/fileds/RadioField';
import SelectField from '../../../../components/fileds/SelectField';

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
                <TextField  {...register('address.cep')} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('address.street')} label="Logradouro" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectField getValue={configuration.service.getStates} title={'Estado'} register={register('address.state')} onChange={onChangeState}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectField getValue={state? getCities : null} title={'Cidade'} register={register('address.city.id')} watch={state}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('address.number')} label="Número" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('address.adjunct')} label="Complemento" variant="outlined" size="small"/>
            </Grid>
        </React.Fragment>
    );
};
export default RegisterInstitution;
