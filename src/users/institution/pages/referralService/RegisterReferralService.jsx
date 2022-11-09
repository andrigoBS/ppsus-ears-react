import React from 'react';
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import AsyncRequest from '../../../../components/api/AsyncRequest';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import BrazilianPhoneField from '../../../../components/fileds/phone/BrazilianPhoneField';
import RadioField from '../../../../components/fileds/radio/RadioField';
import useInstitutionService from '../../useInstituionService';

const RegisterReferralService = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useInstitutionService();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'de Serviço de Saúde Auditiva'} serviceFunction={service.referralServiceRegister}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('name')} label="Nome do serviço"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('CNPJ')} label="CNPJ"
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('CNES')} label="CNES"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <AsyncRequest requestFunction={service.getReferralServiceTypes} loaderChildren={<CircularProgress />}>
                    {(referralServiceTypes) => (
                        <RadioField
                            title={'Tipo de serviço'}
                            register={{ ...register('referralServiceType') }}
                            values={referralServiceTypes}
                        />
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('preferentialEmail')} label="E-mail preferencial"
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
                <BrazilianPhoneField  register={register} name="phonePrimary" formErrors={errors}
                    label="Telefone institucional" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phoneSecond" formErrors={errors}
                    label="Telefone celular institucional" variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('CEP')} label="CEP"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('street')} label="Logradouro"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('state')} label="Estado"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('city')} label="Cidade"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('number')} label="Número"
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('complement')} label="Complemento"
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Dados do responsável do serviço
                </Typography>
                <TextField
                    {...register('nameOfResponsible')} label="Nome do responsável"
                    variant="outlined" size="small" required
                />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterReferralService;
