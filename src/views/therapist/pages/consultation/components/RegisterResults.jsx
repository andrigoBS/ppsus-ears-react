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
    RadioGroup,
    Select,
    TextField,
    Typography
} from '@mui/material';
import React, { Fragment } from 'react';

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

const RegisterResults = ({ register, errors }) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" sx={styles.textTitle}>Resultados dos Testes</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register('avaliationDate')} label="Data da avaliação" variant="outlined" size="small" />
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
                <Typography variant="h6" >IRDA</Typography>
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
                <Typography variant="h6" >Resultado Teste</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.select} size="small">
                    <InputLabel>Tipo de teste</InputLabel>
                    <Select label="Tipo de teste" {...register('type')}>
                        <MenuItem value={0}>EOET</MenuItem>
                        <MenuItem value={1}>PEATE-A</MenuItem>
                        <MenuItem value={2}>EOET + PEATE-A</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" >
                    <FormLabel component="legend"> Orelha Esquerda</FormLabel>
                    <RadioGroup {...register('resultLeftEar')} defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou"/>
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl sx={styles.select} component="fieldset" size="small" >
                    <FormLabel component="legend"> Orelha Direita</FormLabel>
                    <RadioGroup {...register('resultRightEar')} defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou"/>
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou"/>
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
