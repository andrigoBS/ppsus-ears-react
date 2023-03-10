import React from 'react';
import { useForm } from 'react-hook-form';
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import AsyncRequest from '../../../../components/api/AsyncRequest';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import PasswordField from '../../../../components/fileds/password/PasswordField';
import SelectField from '../../../../components/fileds/select/SelectField';
import useRegisterSecretaryUserController from './useRegisterSecretaryUserController';

const inputProps = {
    general: {
        maxLength: '255'
    },
    password: {
        maxLength: '8'
    }
};

const RegisterSecretaryUser = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const { getStates, getZones, onChangeState, registerZoneUser, state } = useRegisterSecretaryUserController();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'novo usuário para a secretaria'} serviceFunction={registerZoneUser} baseRoute={'/secretaria'}>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('name')} label="Nome completo"
                    inputProps={inputProps.general}
                    variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('login')} label={'Login'}
                    inputProps={inputProps.general}
                    variant="outlined" size="small" required
                    helperText={<p>Nome que será usado para acessar a plataforma junto a senha</p>}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <PasswordField register={register} inputProps={inputProps.password}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('passwordConfirm')} label="Confirmação de senha"
                    inputProps={inputProps.password}
                    type="password" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={getStates} loaderChildren={<CircularProgress />}>
                    {(states) => (
                        <SelectField
                            title={'Estado'} register={{ ...register('state.id') }}
                            onChange={onChangeState} required values={states}
                        />
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={state? getZones: null} loaderChildren={<CircularProgress />}>
                    {(zones) => (
                        <SelectField
                            title={'Região'} register={{ ...register('zone.id') }}
                            disabled={!state} required values={zones}
                        />
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('role')} label="Cargo"
                    inputProps={inputProps.general}
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
                    inputProps={inputProps.general}
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('emails.1')} label="E-mail alternativo"
                    inputProps={inputProps.general}
                    variant="outlined" size="small"
                />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterSecretaryUser;
