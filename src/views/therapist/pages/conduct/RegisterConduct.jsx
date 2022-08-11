import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import SelectField from '../../../../components/fileds/SelectField';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const styles = {
    select: {
        width: '100%'
    }
};

const RegisterConduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Conduta'} serviceFunction={configuration.service.conductRegister}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('resultDescription')} label="Descrição resultado" variant="outlined" size="small" multiline rows={4} required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('accompanyDescription')} label="Descrição acompanhamento" variant="outlined" size="small" multiline rows={4} required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectField register={{ ...register('type') }} title={'Tipo de teste'} getValue={configuration.service.getTriageTypes} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" required>
                    <FormLabel component="legend"> Orelha Esquerda</FormLabel>
                    <RadioGroup {...register('leftEar')} defaultValue={1}>
                        <FormControlLabel {...register('leftEar')} value={1} control={<Radio/>} label="Passou"/>
                        <FormControlLabel {...register('leftEar')} value={0} control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" required>
                    <FormLabel component="legend"> Orelha Direita</FormLabel>
                    <RadioGroup {...register('rightEar')} defaultValue={1}>
                        <FormControlLabel {...register('rightEar')} value={1} control={<Radio/>} label="Passou"/>
                        <FormControlLabel {...register('rightEar')} value={0} control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" required>
                    <FormLabel component="legend">Tipo teste</FormLabel>
                    <RadioGroup {...register('testType')} defaultValue={1}>
                        <FormControlLabel {...register('testType')} value={1} control={<Radio/>} label="Teste"/>
                        <FormControlLabel {...register('testType')} value={2} control={<Radio/>} label="Reteste"/>
                        <FormControlLabel {...register('testType')} value={3} control={<Radio/>} label="Teste e reteste"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" required>
                    <FormLabel component="legend">IRDA</FormLabel>
                    <RadioGroup {...register('irda')} defaultValue={1}>
                        <FormControlLabel {...register('irda')} value={1} control={<Radio/>} label="Possui"/>
                        <FormControlLabel {...register('irda')} value={0} control={<Radio/>} label="Não possui"/>
                    </RadioGroup>
                </FormControl>
            </Grid>

        </BaseRegisterPaper>
    );
};
export default RegisterConduct;