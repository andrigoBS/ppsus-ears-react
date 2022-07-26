import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import BrazilianPhoneField from '../../../../components/fileds/BrazilianPhoneField';
import InstitutionService from '../../../../services/institution/InstitutionService';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterInstitution = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Instituição'} serviceFunction={InstitutionService.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('institutionName')} label="Nome instituição" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('password')} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('passwordConfirm')} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('cnes')} label="CNES" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('cnpj')} label="CNPJ" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Tipo de Instituição
                </Typography>
                <FormControl required>
                    <RadioGroup {...register('institutionType')} defaultValue={'Hospital'}>
                        <FormControlLabel value={'HOSPITAL'} control={<Radio/>} label="Hospital"/>
                        <FormControlLabel value={'MATERNITY'} control={<Radio/>} label="Maternidade"/>
                        <FormControlLabel value={'HOSPITAL_AND_MATERNITY'} control={<Radio/>} label="Hospital e Maternidade"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('email')} label="E-mail Preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register('alternativeEmail')} label="E-mail Alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="institutionPhone" formErrors={errors} label="Telefone Institucional" required />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="institutionPhoneSecond" formErrors={errors} label="Telefone Celular Institucional"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('cep')} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('street')} label="Logradouro" variant="outlined" size="small" required/>
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
                    Dados do Responsável da Instituição
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('responsibleName')} label="Nome do Responsável" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('responsibleRole')} label="Cargo" variant="outlined" size="small"/>
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterInstitution;
