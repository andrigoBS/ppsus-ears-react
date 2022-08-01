import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import BrazilianPhoneField from '../../../../components/fileds/BrazilianPhoneField';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';
import RadioField from '../../../../components/fileds/RadioField';

const RegisterInstitution = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Instituição'} serviceFunction={configuration.service.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('institutionName')} label="Nome instituição" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('password')} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('passwordConfirm')} label="Confirmação de senha" type="password" variant="outlined" size="small" required/>
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
                <Typography  variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('email')} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register('alternativeEmail')} label="E-mail alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="institutionPhone" formErrors={errors} label="Telefone institucional" required />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="institutionCellphone" formErrors={errors} label="Telefone celular institucional"/>
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
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Dados do responsável da instituição
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('responsibleName')} label="Nome do responsável" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('responsibleRole')} label="Cargo" variant="outlined" size="small"/>
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterInstitution;
