import React, { Fragment } from 'react';
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import AsyncRequest from '../../../../../components/api/AsyncRequest';
import RadioField from '../../../../../components/fileds/radio/RadioField';
import SelectField from '../../../../../components/fileds/select/SelectField';
import useTherapistService from '../../../useTherapistService';
import useRegisterResultsStyles from './useRegisterResultsStyles';

const RegisterResults = ({ register }) => {
    const service = useTherapistService();
    const styles = useRegisterResultsStyles();

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" sx={styles.textTitle}>Registrar Resultado</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register('evaluationDate')} label="Data da avaliação" variant="outlined"
                    size="small" type="date" InputLabelProps={{ shrink: true }} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <AsyncRequest requestFunction={service.getAllEquipments} loaderChildren={<CircularProgress/>}>
                    {(values) => (
                        <SelectField register={register('equipment.id')} title={'Equipamento'} values={values} required/>
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <AsyncRequest requestFunction={service.getAllIndicators} loaderChildren={<CircularProgress/>}>
                    {(values) => (
                        <SelectField register={register('indicators')} title={'IRDA'} values={values} multiple required/>
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={service.getTriageTypes} loaderChildren={<CircularProgress/>}>
                    {(values) => (
                        <SelectField register={register('type')} title={'Tipo TAN'} values={values} required/>
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AsyncRequest requestFunction={service.getAllInstitutions} loaderChildren={<CircularProgress/>}>
                    {(values) => (
                        <SelectField register={register('institution.id')} title={'Insitituição do teste'} values={values} required/>
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField register={register('leftEar')} title={'Orelha Esquerda'} values={[{ id: 1, name: 'Passou' },{ id: 0, name: 'Falhou' }]} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField register={register('rightEar')} title={'Orelha Direita'} values={[{ id: 1, name: 'Passou' },{ id: 0, name: 'Falhou' }]} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Informações adicionais</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <AsyncRequest requestFunction={service.getAllConducts} loaderChildren={<CircularProgress/>}>
                    {(values) => (
                        <SelectField register={register('conduct.id')} title={'Conduta'} values={values} required/>
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <AsyncRequest requestFunction={service.getAllOrientations} loaderChildren={<CircularProgress/>}>
                    {(values) => (
                        <SelectField register={register('orientation.id')} title={'Orientação'} values={values} required/>
                    )}
                </AsyncRequest>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField {...register('observation')} label="Observação" multiline rows={4} variant="outlined" size="small" />
            </Grid>
        </Fragment>
    );
};

export default RegisterResults;
