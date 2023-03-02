import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField } from '@mui/material';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import useTherapistService from '../../useTherapistService';

const headers = [
    { name: 'model', title: 'Modelo' },
    { name: 'brand', title: 'Marca' },
    { formatter: 'date', name: 'dateOfLastCalibration', title: 'Data última calibração' },
    { formatter: 'date', name: 'dateOfDeactivation', title: 'Data desativação' }
];

const tableProperties = {
    actions: {
        delete: {
            entity: 'equipment',
            genericField: 'dateOfDeactivation',
            route: ''
        },
        edit: {
            genericField: 'dateOfDeactivation',
            route: ''
        }
    }
};

const ListEquipment = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useTherapistService();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Equipamentos'}
            serviceFunction={service.getAllEquipments} headers={headers}
            tableProperties={tableProperties} fileName={'Equipamentos'}
        >
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('model')} label="Modelo"
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('brand')} label="Marca"
                    variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('dateOfLastCalibration')} label="Data última calibração"
                    variant="outlined" size="small" type="date" InputLabelProps={{ shrink: true }}
                />
            </Grid>
        </BaseConsult>
    );
};
export default ListEquipment;
