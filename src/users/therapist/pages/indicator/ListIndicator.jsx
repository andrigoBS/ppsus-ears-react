import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import useTherapistService from '../../useTherapistService';

const headers = [
    { name: 'id', title: 'Código' },
    { name: 'name', title: 'Nome' }
];

const ListIndicator = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useTherapistService();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Indicadores'} serviceFunction={service.getAllIndicators} headers={headers}>
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
