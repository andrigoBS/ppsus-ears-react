import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectField from '../../../../components/fileds/SelectField';

const RegisterSecretary = ({ register, configuration }) => {
    const [state, setState] = useState(null);

    const getCities = () => {
        return configuration.service.getCities(state);
    };

    const onChangeState = (event) => {
        setState(event.target.value);
    };

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('secretaryName')} label="Nome secretaria" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectField getValue={configuration.service.getStates} title={'Estado'} register={register('address.state')} onChange={onChangeState}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectField getValue={state? getCities : null} title={'Cidade'} register={register('address.city.id')} watch={state}/>
            </Grid>
        </React.Fragment>
    );
};
export default RegisterSecretary;
