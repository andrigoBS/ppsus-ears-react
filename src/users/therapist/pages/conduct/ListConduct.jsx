import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/consult/BaseConsult';
import useTherapistService from '../../useTherapistService';

const headers = [
    { name: 'resultDescription', title: 'Descrição resultado' },
    { name: 'accompanyDescription', title: 'Descrição acompanhamento' },
    { formatter: 'yes-or-no', name: 'leftEar', title: 'Passou esquerda' },
    { formatter: 'yes-or-no', name: 'rightEar', title: 'Passou direita' },
    { formatter: 'yes-or-no', name: 'irda', title: 'Com irda' },
    { name: 'testType', title: 'Tipo teste' }
];

const ListConduct = () => {
    const { formState: { errors }, handleSubmit, register } = useForm();
    const service = useTherapistService();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Condutas'} serviceFunction={service.getAllConducts} headers={headers}>
            {/*<Grid item xs={12} sm={12} md={12}>*/}
            {/*    <TextField  {...register('description')} label="Descrição" variant="outlined" size="small"/>*/}
            {/*</Grid>*/}
        </BaseConsult>
    );
};
export default ListConduct;
