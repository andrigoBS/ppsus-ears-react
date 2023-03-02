import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField } from '@mui/material';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import useTherapistService from '../../useTherapistService';

const headers = [
    { name: 'name', title: 'Descrição' },
    { formatter: 'date', name: 'dateOfDeactivation', title: 'Data desativação' }
];

const tableProperties = {
    actions: {
        delete: {
            entity: 'orientation',
            genericField: 'dateOfDeactivation',
            route: '',
        },
        edit: {
            genericField: 'dateOfDeactivation',
            route: '',
        },
        permissionField: 'therapist'
    }
};

const ListOrientation = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useTherapistService();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Orientações'}
            serviceFunction={service.getAllOrientations} headers={headers}
            tableProperties={tableProperties} fileName={'Orientacoes'}
        >
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('description')} label="Descrição"
                    variant="outlined" size="small"
                />
            </Grid>
        </BaseConsult>
    );
};
export default ListOrientation;
