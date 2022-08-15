import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import BrazilianPhoneField from '../../../../../components/fileds/BrazilianPhoneField';

const styles = {
    textTitle: {
        marginTop: '40px'
    },
    finalButton: {
        width: '300px',
        marginTop: '35px'
    },
};

const RegisterResponsible = ({ register, errors }) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.textTitle}>Informações pessoais dos Responsáveis</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <TextField {...register('responsibleName')} label="Nome completo do responsável" variant="outlined" size="small"  />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register('responsibleBirthdate')} label="Data de nascimento" variant="outlined"
                    size="small" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Contato</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsiblePreferentialEmail')} label="E-mail preferencial" variant="outlined" size="small"  required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsibleAlternativeEmail')} label="E-mail alternativo" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="responsiblePhonePrimary" formErrors={errors}
                    label="Telefone residencial" variant="outlined" size="small"  required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="responsiblePhoneSecond" formErrors={errors}
                    label="Telefone celular" variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsibleCEP')} label="CEP" variant="outlined" size="small"  />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsibleStreet')} label="Logradouro" variant="outlined" size="small"  />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsibleNumber')} label="Número" variant="outlined" size="small"  />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsibleComplement')} label="Complemento" variant="outlined" size="small"  />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsibleState')} label="Estado" variant="outlined" size="small"  />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('responsibleCity')} label="Cidade" variant="outlined" size="small"  />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button sx={styles.finalButton} color="secondary" variant="contained">
                    Adicionar outro responsável
                </Button>
            </Grid>
        </Fragment>
    );
};

export default RegisterResponsible;
