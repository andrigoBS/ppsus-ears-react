import { CircularProgress, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AsyncRequest from '../../../../components/api/AsyncRequest';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import BrazilianPhoneField from '../../../../components/fileds/phone/BrazilianPhoneField';
import PasswordField from '../../../../components/fileds/password/PasswordField';
import SelectField from '../../../../components/fileds/SelectField';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';
import RegisterInstitution from './RegisterInstitution';


const RegisterInstitutionUser = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const configuration = useViewConfiguration();
    const [isRegisterInstitutionOpen, setIsRegisterInstitutionOpen] = useState(false);

    const handleRegisterInstitution = () => {
        setValue('institution.id', undefined);
        setIsRegisterInstitutionOpen(!isRegisterInstitutionOpen);
    };

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Usuário Instituição'} serviceFunction={configuration.service.register}>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('name')} label="Nome completo"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('login')} label="Login"
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
                <TextField
                    {...register('role')} label="Cargo"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('email')} label="E-mail preferencial"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('alternativeEmail')} label="E-mail alternativo"
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField
                    register={register} name="phonePrimary"
                    formErrors={errors} label="Telefone principal" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField
                    register={register} name="phoneSecond"
                    formErrors={errors} label="Telefone alternativo"
                />
            </Grid>
            {isRegisterInstitutionOpen === false &&
                <React.Fragment>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography  variant={'h6'}>
                            Instituição
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <AsyncRequest requestFunction={configuration.service.getAll} loaderChildren={<CircularProgress />}>
                            {(institutions) => (
                                <SelectField
                                    title={'Instituição'} register={{ ...register('institution.id') }}
                                    required values={institutions}
                                />
                            )}
                        </AsyncRequest>
                    </Grid>
                </React.Fragment>
            }
            <Grid item xs={12} sm={12} md={12}>
                <Link
                    component="button"
                    variant="body2"
                    onClick={handleRegisterInstitution}
                >
                    A sua instituição não está na listagem? Clique aqui para criar
                </Link>
            </Grid>
            {isRegisterInstitutionOpen === true &&
                <RegisterInstitution register={register} configuration={configuration}/>
            }
        </BaseRegisterPaper>
    );
};
export default RegisterInstitutionUser;
