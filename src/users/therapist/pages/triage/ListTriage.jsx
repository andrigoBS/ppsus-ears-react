import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import useTherapistService from '../../useTherapistService';

const headers = [
    { formatter: 'yes-or-no', name: 'leftEar', title: 'Passou esquerda' },
    { formatter: 'yes-or-no', name: 'rightEar', title: 'Passou direita' },
    { formatter: 'date', name: 'evaluationDate', title: 'Data avaliação' },
    { name: 'type', title: 'Tipo TAN' },
    { name: 'observation', title: 'Observação' },
    { name: 'conduct', title: 'Conduta' },
    { name: 'orientation', title: 'Orientação' }
];

const ListTriage = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useTherapistService();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Triagens'} serviceFunction={service.getAllTriages} headers={headers}>
            {/*<Grid item xs={12} sm={12} md={12}>*/}
            {/*    <TextField  {...register('description')} label="Descrição" variant="outlined" size="small"/>*/}
            {/*</Grid>*/}
        </BaseConsult>
    );
};
export default ListTriage;
