import React from 'react';
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import AsyncRequest from '../../../../components/api/AsyncRequest';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import PasswordField from '../../../../components/fileds/password/PasswordField';
import SelectField from '../../../../components/fileds/select/SelectField';
import useSecretaryService from '../../useSecretaryService';

const RegisterSecretaryUser = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useSecretaryService();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'novo usuário para a secretaria'} serviceFunction={service.registerZone}>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('name')} label="Nome completo"
                    variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('login')} label={'Login'}
                    variant="outlined" size="small" required
                    helperText={<p>Nome que será usado para acessar a plataforma junto a senha</p>}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <PasswordField register={register}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('passwordConfirm')} label="Confirmação de senha"
                    type="password" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={service.getZones} loaderChildren={<CircularProgress />}>
                    {(zones) => (
                        <SelectField
                            title={'Região'} register={{ ...register('zone.id') }}
                            required values={zones}
                        />
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('role')} label="Cargo"
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('emails.0')} label="E-mail preferencial"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('emails.1')} label="E-mail alternativo"
                    variant="outlined" size="small"
                />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterSecretaryUser;
