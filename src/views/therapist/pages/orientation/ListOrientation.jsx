import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/BaseConsult';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Código', name: 'id' },
    { title: 'Descrição', name: 'description' }
];

const ListOrientation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Orientação'} serviceFunction={configuration.service.getAllOrientations} headers={headers}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('description')} label="Descrição" variant="outlined" size="small"/>
            </Grid>
        </BaseConsult>
    );
};
export default ListOrientation;
