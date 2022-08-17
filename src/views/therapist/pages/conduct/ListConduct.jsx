import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/BaseConsult';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Descrição resultado', name: 'resultDescription' },
    { title: 'Descrição acompanhamento', name: 'accompanyDescription' },
    { title: 'Passou esquerda', name: 'leftEar', formatter: 'yes-or-no' },
    { title: 'Passou direita', name: 'rightEar', formatter: 'yes-or-no' },
    { title: 'Com irda', name: 'irda', formatter: 'yes-or-no' },
    { title: 'Tipo teste', name: 'testType' }
];

const ListConduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Condutas'} serviceFunction={configuration.service.getAllConducts} headers={headers}>
            {/*<Grid item xs={12} sm={12} md={12}>*/}
            {/*    <TextField  {...register('description')} label="Descrição" variant="outlined" size="small"/>*/}
            {/*</Grid>*/}
        </BaseConsult>
    );
};
export default ListConduct;
