import React, { Fragment } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import BrazilianPhoneField from '../../../../../components/fileds/BrazilianPhoneField';

const styles = {
    textTitle:{
        marginTop: '40px'
    },
};

const RegisterMother = ({ register, errors }) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.textTitle}>Informações pessoais da Mãe</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <TextField {...register('motherName')} label="Nome completo da mãe" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register('motherDirthdate')} label="Data de nascimento" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Contato</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherPreferentialEmail')} label="E-mail Preferencial" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherAlternativeEmail')} label="E-mail Alternativo" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="motherPhonePrimary" formErrors={errors}
                    label="Telefone Residencial" variant="outlined" size="small" sx={styles.textField} required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="motherPhoneSecond" formErrors={errors}
                    label="Telefone Celular" size="small" sx={styles.textField} variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherCEP')} label="CEP" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherStreet')} label="Logradouro" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherNumber')} label="Número" variant="outlined" size="small" sx={styles.textField}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherComplement')} label="Complemento" variant="outlined" size="small" sx={styles.textField}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherState')} label="Estado" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('motherCity')} label="Cidade" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
        </Fragment>
    );
};

export default RegisterMother;
