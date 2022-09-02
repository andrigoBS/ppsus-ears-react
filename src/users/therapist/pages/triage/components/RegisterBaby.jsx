import React, { Fragment } from 'react';
import { Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import AsyncRequest from '../../../../../components/api/AsyncRequest';
import SelectField from '../../../../../components/fileds/select/SelectField';
import useTherapistService from '../../../useTherapistService';

const styles = {
    textTitle:{
        marginTop: '40px'
    },
};

const RegisterBaby = ({ register }) => {
    const service = useTherapistService();

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" sx={styles.textTitle}>Informações do Bebê</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField {...register('baby.name')} label="Nome do bebê" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('baby.weight')} label="Peso" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('baby.height')} label="Altura" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('baby.circumference')} label="Perímetro cefálico" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('baby.birthDate')} label="Data de nascimento" variant="outlined"
                    size="small" type="date" InputLabelProps={{ shrink: true }} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('baby.gestationalAge')} label="Idade gestacional" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={service.getChildBirthType} loaderChildren={<CircularProgress />}>
                    {(values) => (
                        <SelectField register={register('baby.childBirthType')} values={values} title={'Tipo de parto'} required/>
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormGroup {...register('baby.maternalDeath')}>
                    <FormControlLabel control={<Checkbox />} label="Óbito materno" size="small" {...register('baby.maternalDeath')}/>
                </FormGroup>
            </Grid>
        </Fragment>
    );
};

export default RegisterBaby;
