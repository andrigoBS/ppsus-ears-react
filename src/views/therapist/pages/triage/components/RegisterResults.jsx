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

const RegisterResults = ({ register, /*errors*/ }) => {
    const configuration = useViewConfiguration();

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register('avaliationDate')} label="Data da avaliação" variant="outlined"
                    size="small" type="date" InputLabelProps={{ shrink: true }}/>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <FormControl sx={styles.select} size="small">
                    <InputLabel id="label">Equipamento</InputLabel>
                    <Select {...register('equipment')} label="Equipamento">
                        <MenuItem value={10}>Equipamento 1</MenuItem>
                        <MenuItem value={20}>Equipamento 2</MenuItem>
                        <MenuItem value={30}>Equipamento 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl {...register('IRDA')} component="fieldset" sx={styles.select} variant="standard" size="small" >
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Prematuridade"
                        />
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Baixo peso ao nascer"
                        />
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Hiperbilirrubinemia"
                        />
                    </FormGroup>
                </FormControl>
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
                <Typography variant="h6" >Informações adicionais</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField label="Observação" multiline variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.select} size="small">
                    <InputLabel>Conduta</InputLabel>
                    <Select label="Conduta" {...register('conduct')}>
                        <MenuItem value={0}>Conduta1</MenuItem>
                        <MenuItem value={1}>Conduta2</MenuItem>
                        <MenuItem value={2}>Conduta3</MenuItem>
                        <MenuItem value={2}>Conduta4</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.select}  size="small">
                    <InputLabel>Orientação</InputLabel>
                    <Select label="Orientação" {...register('orientation')}>
                        <MenuItem value={0}>Orientação salva 1</MenuItem>
                        <MenuItem value={1}>Orientação salva 2</MenuItem>
                        <MenuItem value={2}>Orientação salva 3</MenuItem>
                        <MenuItem value={2}>Orientação salva 4</MenuItem>
                    </Select>
                </FormControl>
                <Button sx={styles.finalButton} color="secondary" variant="contained">
                    Adicionar uma nova orientação
                </Button>
            </Grid>
        </Fragment>
    );
};

export default RegisterResults;
