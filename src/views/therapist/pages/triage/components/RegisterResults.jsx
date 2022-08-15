import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup, Select,
    TextField,
    Typography
} from '@mui/material';
import React, { Fragment } from 'react';
import RadioField from '../../../../../components/fileds/RadioField';
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
                <TextField {...register('avaliationDate')} label="Data da avaliação" variant="outlined"
                    size="small" type="date" InputLabelProps={{ shrink: true }}/>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <SelectFieldAsync register={register('equipment')} title={'Equipamento'} getValues={configuration.service.getAllEquipments} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register('irda')} title={'IRDA'} getValue={configuration.service.getAllIndicators} multiple/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register('type')} title={'Tipo de teste'} getValue={configuration.service.getTriageTypes}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField register={register('leftEar')} title={'Orelha Esquerda'} values={[{ id: true, name: 'Passou' },{ id: false, name: 'Falhou' }]} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField register={register('rightEar')} title={'Orelha Direita'} values={[{ id: true, name: 'Passou' },{ id: false, name: 'Falhou' }]} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" >Informações adicionais</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register('conduct')} title={'Conduta'} getValues={configuration.service.getAllConducts} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register('orientation')} title={'Orientação'} getValues={configuration.service.getAllOrientations} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField {...register('observation')} label="Observação" multiline variant="outlined" size="small" />
            </Grid>
        </Fragment>
    );
};

export default RegisterResults;
