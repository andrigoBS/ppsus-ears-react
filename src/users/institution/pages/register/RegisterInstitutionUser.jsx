import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CircularProgress, Grid, Link, TextField, Typography } from '@mui/material';
import AsyncRequest from '../../../../components/api/AsyncRequest';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import PasswordField from '../../../../components/fileds/password/PasswordField';
import BrazilianPhoneField from '../../../../components/fileds/phone/BrazilianPhoneField';
import SelectField from '../../../../components/fileds/select/SelectField';
import useInstitutionService from '../../useInstituionService';
import RegisterInstitution from './RegisterInstitution';

const inputProps = {
    general: {
        maxLength: '255'
    },
    password: {
        maxLength: '8'
    }
};

const RegisterInstitutionUser = () => {
    const { formState: { errors }, handleSubmit, register, setValue, watch } = useForm();
    const service = useInstitutionService();
    const [isRegisterInstitutionOpen, setIsRegisterInstitutionOpen] = useState(false);
    const [focused, setFocused] = React.useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const handleRegisterInstitution = React.useCallback(() => {
        setValue('institution.id', undefined);
        setIsRegisterInstitutionOpen(!isRegisterInstitutionOpen);
    }, [isRegisterInstitutionOpen, setValue]);

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Usuário Instituição'} serviceFunction={service.register} baseRoute={'/institucional'}>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('name')} label="Nome completo"
                    inputProps={inputProps.general}
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('login')} label="Login"
                    inputProps={inputProps.general}
                    variant="outlined" size="small" required
                    onFocus={onFocus} onBlur={onBlur}
                    helperText={focused && <p>Nome que será usado para acessar a plataforma junto a senha</p>}
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
                <TextField
                    {...register('role')} label="Cargo"
                    inputProps={inputProps.general}
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
                    {...register('emails[0]')} label="E-mail preferencial"
                    inputProps={inputProps.general}
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('emails[1]')} label="E-mail alternativo"
                    inputProps={inputProps.general}
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField
                    register={register} name="phones[0]"
                    formErrors={errors} label="Telefone principal" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField
                    register={register} name="phones[1]"
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
                        <AsyncRequest requestFunction={service.getAll} loaderChildren={<CircularProgress />}>
                            {(institutions) => (
                                <SelectField
                                    title={'Instituição'} register={{ ...register('institution.id') }}
                                    required values={institutions}
                                />
                            )}
                        </AsyncRequest>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={handleRegisterInstitution}
                        >
                            A sua instituição não está na listagem? Clique aqui para criar
                        </Link>
                    </Grid>
                </React.Fragment>
            }
            {isRegisterInstitutionOpen === true &&
                <RegisterInstitution register={register} watch={watch}/>
            }
        </BaseRegisterPaper>
    );
};
export default RegisterInstitutionUser;
