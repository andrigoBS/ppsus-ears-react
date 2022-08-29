import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import RadioField from '../../../../components/fileds/radio/RadioField';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const RegisterConduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Conduta'} serviceFunction={configuration.service.conductRegister}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('resultDescription')} label="Descrição da conduta"
                    variant="outlined" size="small" multiline rows={4} required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('accompanyDescription')} label="Descrição do acompanhamento"
                    variant="outlined" size="small" multiline rows={4} required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField
                    register={register('leftEar')} title={'Orelha Esquerda'}
                    values={[{ id: 1, name: 'Passou' },{ id: 0, name: 'Falhou' }]}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField
                    register={register('rightEar')} title={'Orelha Direita'}
                    values={[{ id: 1, name: 'Passou' },{ id: 0, name: 'Falhou' }]}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField
                    register={register('irda')} title={'IRDA'}
                    values={[{ id: 1, name: 'Possui' },{ id: 0, name: 'Não Possui' }]}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField
                    register={register('testType')} title={'Tipo de teste'}
                    values={[{ id: 1, name: 'Teste' },{ id: 2, name: 'Reteste' },{ id: 3, name: 'Teste e reteste' }]}
                />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterConduct;
