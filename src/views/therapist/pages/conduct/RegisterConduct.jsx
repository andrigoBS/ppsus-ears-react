import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import SelectFieldAsync from '../../../../components/fileds/SelectFieldAsync';
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
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Conduta'} serviceFunction={configuration.service.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('title')} label="Título" variant="outlined" size="small" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('resultType')} label="Tipo resultado" variant="outlined" size="small" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('accompanyType')} label="Tipo acompanhamento" variant="outlined" size="small" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('description')} label="Descrição" variant="outlined" size="small" multiline rows={4} required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register} title={'Tipo de teste'} getValue={configuration.service.getTriageTypes}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" >
                    <FormLabel component="legend"> Orelha Esquerda</FormLabel>
                    <RadioGroup {...register('leftEar')} defaultValue={true}>
                        <FormControlLabel value={true} control={<Radio/>} label="Passou"/>
                        <FormControlLabel value={false} control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" >
                    <FormLabel component="legend"> Orelha Direita</FormLabel>
                    <RadioGroup {...register('rightEar')} defaultValue={true}>
                        <FormControlLabel value={true} control={<Radio/>} label="Passou"/>
                        <FormControlLabel value={false} control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.select} component="fieldset" size="small" >
                    <FormLabel component="legend">IRDA</FormLabel>
                    <RadioGroup {...register('irda')} defaultValue={true}>
                        <FormControlLabel value={true} control={<Radio/>} label="Possui"/>
                        <FormControlLabel value={false} control={<Radio/>} label="Não Possui"/>
                    </RadioGroup>
                </FormControl>
            </Grid>

        </BaseRegisterPaper>
    );
};
export default RegisterConduct;
