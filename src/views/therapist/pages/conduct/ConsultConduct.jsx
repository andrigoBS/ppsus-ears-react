import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/BaseConsult';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Código', name: 'id' },
    { title: 'Descrição resultado', name: 'resultDescription' },
    { title: 'Descrição acompanhamento', name: 'accompanyDescription' },
    { title: 'Orelha esquerda', name: 'leftEar' },
    { title: 'Orelha direita', name: 'rightEar' },
    { title: 'Possui irda', name: 'irda' },
    { title: 'Tipo triagem', name: 'type' },
    { title: 'Tipo teste', name: 'testType' }
];

const ConsultConduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Conduta'} serviceFunction={configuration.service.getAllConducts} headers={headers}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('description')} label="Descrição" variant="outlined" size="small"/>
            </Grid>
        </BaseConsult>
    );
};
export default ConsultConduct;