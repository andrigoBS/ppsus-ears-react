import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../../components/bases/consult/BaseConsult';
import { useViewConfiguration } from '../../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Nome', name: 'name' },
    { title: 'Peso', name: 'weight' },
    { title: 'Altura', name: 'height' },
    { title: 'Circunferência', name: 'circumference' },
    { title: 'Data nascimento', name: 'birthDate', formatter: 'date' },
    { title: 'Tipo parto', name: 'childBirthType' },
    { title: 'Mãe', name: 'birthMother' }
];

const ListBaby = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Bebês'} serviceFunction={configuration.service.getAllBabies} headers={headers}>
            {/*<Grid item xs={12} sm={12} md={12}>*/}
            {/*    <TextField  {...register('description')} label="Descrição" variant="outlined" size="small"/>*/}
            {/*</Grid>*/}
        </BaseConsult>
    );
};
export default ListBaby;
