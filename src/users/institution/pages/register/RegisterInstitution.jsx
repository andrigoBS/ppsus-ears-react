import React, { useState } from 'react';
import { CircularProgress, Divider, Grid, TextField, Typography } from '@mui/material';
import AsyncRequest from '../../../../components/api/AsyncRequest';
import CNPJField from '../../../../components/fileds/documents/CNPJField';
import RadioField from '../../../../components/fileds/radio/RadioField';
import SelectField from '../../../../components/fileds/select/SelectField';
import useInstitutionService from '../../useInstituionService';

const RegisterInstitution = ({ register }) => {
    const [state, setState] = useState(null);
    const service = useInstitutionService();

    const getCities = () => {
        return service.getCities(state);
    };

    const onChangeState = (event) => {
        setState(event.target.value);
    };

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Divider/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>
                    Informações sobre a Instituição
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    {...register('institution.institutionName')} label="Nome instituição"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('institution.cnes')} label="CNES"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('institution.cnpj')} label="CNPJ"
                    variant="outlined" size="small"
                />
                <CNPJField register={register} name="cnpj" label="CNPJ"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <AsyncRequest requestFunction={service.getTypes} loaderChildren={<CircularProgress />}>
                    {(institutionTypes) => (
                        <RadioField
                            title={'Tipo de instituição'} register={{ ...register('institution.institutionType') }}
                            required values={institutionTypes}
                        />
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('institution.address.cep')} label="CEP"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('institution.address.street')} label="Logradouro"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={service.getStates} loaderChildren={<CircularProgress />}>
                    {(states) => (
                        <SelectField
                            title={'Estado'} register={{ ...register('institution.address.state') }}
                            onChange={onChangeState} required values={states}
                        />
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={getCities} loaderChildren={<CircularProgress />}>
                    {(cities) => (
                        <SelectField
                            title={'Cidade'} register={register('institution.address.city.id')}
                            disabled={!state} required values={cities}
                        />
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('institution.address.number')} label="Número"
                    variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    {...register('institution.address.adjunct')} label="Complemento"
                    variant="outlined" size="small"
                />
            </Grid>
        </React.Fragment>
    );
};
export default RegisterInstitution;
