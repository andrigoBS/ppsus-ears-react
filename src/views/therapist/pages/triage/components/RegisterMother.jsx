import { Grid, TextField, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import BrazilianPhoneField from '../../../../../components/fileds/BrazilianPhoneField';
import SelectFieldAsync from '../../../../../components/fileds/SelectFieldAsync';
import { useViewConfiguration } from '../../../../../providers/viewConfiguration/ViewConfiguration';

const styles = {
    textTitle:{
        marginTop: '40px'
    },
};

const RegisterMother = ({ register, errors }) => {
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
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.textTitle}>Informações pessoais da Mãe</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <TextField {...register('motherName')} label="Nome completo da mãe" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register('motherDirthdate')} label="Data de nascimento" variant="outlined" size="small"
                    type="date" InputLabelProps={{ shrink: true }} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Contato</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherPreferentialEmail')} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherAlternativeEmail')} label="E-mail alternativo" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="motherPhonePrimary" formErrors={errors}
                    label="Telefone residencial" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="motherPhoneSecond" formErrors={errors}
                    label="Telefone celular" size="small" variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('triage.guardian.address.cep')} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('triage.guardian.address.street')} label="Logradouro" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={register('triage.guardian.address.state')} getValue={configuration.service.getStates} title={'Estado'} onChange={onChangeState}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={register('triage.guardian.address.city.id')} getValue={state? getCities : null} title={'Cidade'} watch={state}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('triage.guardian.address.number')} label="Número" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('triage.guardian.address.adjunct')} label="Complemento" variant="outlined" size="small"/>
            </Grid>
        </Fragment>
    );
};

export default RegisterMother;
