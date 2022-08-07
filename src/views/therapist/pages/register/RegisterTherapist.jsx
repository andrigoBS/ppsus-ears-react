import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import BrazilianPhoneField from '../../../../components/fileds/BrazilianPhoneField';
import React from 'react';
import { useForm } from 'react-hook-form';
import PasswordField from '../../../../components/fileds/PasswordField';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const styles = {
    select: {
        width: '100%'
    }
};

const RegisterTherapist = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Fonoaudiólogo'} serviceFunction={configuration.service.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('login')} label={'Login'} variant="outlined" size="small"
                    helperText={<p>Nome que será usado para acessar a plataforma junto a senha</p>} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <PasswordField register={register}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('passwordConfirm')} label="Confirmação de senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('name')} label="Nome completo" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('crfa')} label="CRFa" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} size="small" required>
                    <InputLabel>Tempo de experiência</InputLabel>
                    <Select label="Tempo de experiência" {...register('xp')}>
                        <MenuItem value={0}>Menos de 1 ano</MenuItem>
                        <MenuItem value={1}>De 1 a 3 anos</MenuItem>
                        <MenuItem value={2}>De 3 a 5 anos</MenuItem>
                        <MenuItem value={2}>Mais de 5 anos</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('preferentialEmail')} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register('alternativeEmail')} label="E-mail alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phonePrimary" formErrors={errors}
                    label="Telefone principal" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phoneSecond" formErrors={errors}
                    label="Telefone alternativo" variant="outlined" size="small"
                />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterTherapist;
