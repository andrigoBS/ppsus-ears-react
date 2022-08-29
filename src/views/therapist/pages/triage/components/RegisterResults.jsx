import { Grid, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import RadioField from '../../../../../components/fileds/radio/RadioField';
import SelectFieldAsync from '../../../../../components/fileds/SelectFieldAsync';
import { useViewConfiguration } from '../../../../../providers/viewConfiguration/ViewConfiguration';

const styles = {
    textTitle:{
        marginTop: '40px'
    },
    finalButton: {
        width: '300px',
        marginTop: '35px'
    },
    select: {
        width: '100%'
    }
};

const RegisterResults = ({ register }) => {
    const configuration = useViewConfiguration();

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
                <SelectFieldAsync register={register('equipment.id')} title={'Equipamento'} getValue={configuration.service.getAllEquipments} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register('indicators')} title={'IRDA'} getValue={configuration.service.getAllIndicators} multiple required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={register('type')} title={'Tipo TAN'} getValue={configuration.service.getTriageTypes} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={register('institution.id')} title={'Insitituição do teste'} getValue={configuration.service.getAllInstitutions} required/>
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
                <SelectFieldAsync register={register('conduct.id')} title={'Conduta'} getValue={configuration.service.getAllConducts} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register('orientation.id')} title={'Orientação'} getValue={configuration.service.getAllOrientations} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField {...register('observation')} label="Observação" multiline rows={4} variant="outlined" size="small" />
            </Grid>
        </Fragment>
    );
};

export default RegisterResults;
