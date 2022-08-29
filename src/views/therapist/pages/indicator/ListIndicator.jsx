import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Código', name: 'id' },
    { title: 'Nome', name: 'name' }
];

const ListIndicator = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Indicadores'} serviceFunction={configuration.service.getAllIndicators} headers={headers}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('name')} label="Nome"
                    variant="outlined" size="small"
                />
            </Grid>
        </BaseConsult>
    );
};
export default ListIndicator;
