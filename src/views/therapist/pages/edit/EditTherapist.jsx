import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import BaseEditPaper from '../../../../components/bases/BaseEditPaper';
import BrazilianPhoneField from '../../../../components/fileds/BrazilianPhoneField';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';
import SelectField from '../../../../components/fileds/SelectField';

const styles = {
    button:{
        width: 'fit-content',
    },
    select: {
        width: '100%'
    }
};

const EditTherapist = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const configuration = useViewConfiguration();
    const { id } = useParams();

    return (
        <BaseEditPaper title={'Fonoaudiólogo'}
            handleSubmit={handleSubmit}
            serviceFunction={configuration.service.update}
            serviceGetFunction={configuration.service.get}
            setValue={setValue} id={id}
        >
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('name')} label="Nome completo" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('crfa')} label="CRFa" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('password')} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('passwordConfirm')} label="Confirmação de senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectField register={{ ...register('xp') }} title={'Tempo de experiência'} getValue={configuration.service.getXpTypes}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('preferentialEmail')} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register('alternativeEmail')} label="E-mail alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phonePrimary" formErrors={errors} label="Telefone principal" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phoneSecond" formErrors={errors} label="Telefone alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant={'h6'}>
                    Local de trabalho
                </Typography>
                <FormControl sx={styles.select} size="small" required>
                    <InputLabel>Instituição</InputLabel>
                    <Select {...register('institution')} label="Instituição">
                        <MenuItem value={0}>HOSPITAL DE FLORIANOPOLIS</MenuItem>
                        <MenuItem value={1}>HOSPITAL SANTO ANTONIO IMAS</MenuItem>
                        <MenuItem value={2}>HOSPITAL SANTA JULIANA</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button sx={styles.button} color="secondary" variant="contained">
                    Adicionar instituição
                </Button>
            </Grid>
        </BaseEditPaper>
    );
};
export default EditTherapist;