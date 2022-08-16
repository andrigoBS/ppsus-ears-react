import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import BaseEditPaper from '../../../../components/bases/BaseEditPaper';
import BrazilianPhoneField from '../../../../components/fileds/BrazilianPhoneField';
import PasswordField from '../../../../components/fileds/PasswordField';
import SelectFieldAsync from '../../../../components/fileds/SelectFieldAsync';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const EditTherapist = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const configuration = useViewConfiguration();
    const { id } = useParams();

    return (
        <BaseEditPaper title={'Fonoaudiólogo'}
            handleSubmit={handleSubmit}
            serviceFunction={configuration.service.update}
            serviceGetFunction={configuration.service.get}
            setValue={setValue} id={id}
        >
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('name')} label="Nome completo" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register('login')} label={'Login'} variant="outlined" size="small"
                    helperText={<p>Nome que será usado para acessar a plataforma junto a senha</p>} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <PasswordField register={register}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('passwordConfirm')} label="Confirmação de senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('crfa')} label="CRFa" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={{ ...register('xp') }} title={'Tempo de experiência'} getValue={configuration.service.getXpTypes} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync title={'Instituições'} register={{ ...register('institutions') }} getValue={configuration.service.getAllInstitutions} multiple required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('emails.0')} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register('emails.1')} label="E-mail alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phones.0" formErrors={errors}
                    label="Telefone principal" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phones.1" formErrors={errors}
                    label="Telefone alternativo" variant="outlined" size="small"
                />
            </Grid>
        </BaseEditPaper>
    );
};
export default EditTherapist;
