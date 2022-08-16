import { Grid, TextField, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import BrazilianPhoneField from '../../../../../components/fileds/BrazilianPhoneField';
import SelectField from '../../../../../components/fileds/SelectField';
import SelectFieldAsync from '../../../../../components/fileds/SelectFieldAsync';
import { useViewConfiguration } from '../../../../../providers/viewConfiguration/ViewConfiguration';

const BaseRegisterResponsible = ({ register, errors, prefixName, states }) => {
    const [state, setState] = useState(null);
    const configuration = useViewConfiguration();

    const getCities = () => {
        return configuration.service.getCities(state);
    };

    const onChangeState = (event) => {
        setState(event.target.value);
    };

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={9}>
                <TextField {...register(`${prefixName}.name`)} label="Nome completo" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register(`${prefixName}.birthDate`)} label="Data de nascimento" variant="outlined" size="small"
                    type="date" InputLabelProps={{ shrink: true }} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Contato</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register(`${prefixName}.emails.0`)} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register(`${prefixName}.emails.1`)} label="E-mail alternativo" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name={`${prefixName}.phones.0`} formErrors={errors}
                    label="Telefone residencial" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name={`${prefixName}.phones.1`} formErrors={errors}
                    label="Telefone celular" size="small" variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register(`${prefixName}.address.cep`)} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register(`${prefixName}.address.street`)} label="Logradouro" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectField register={register(`${prefixName}.address.state`)} values={states} title={'Estado'} onChange={onChangeState}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={register(`${prefixName}.address.city.id`)} getValue={state? getCities : null} title={'Cidade'} watch={state}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register(`${prefixName}.address.number`)} label="Número" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register(`${prefixName}.address.adjunct`)} label="Complemento" variant="outlined" size="small"/>
            </Grid>
        </Fragment>
    );
};

export default BaseRegisterResponsible;
