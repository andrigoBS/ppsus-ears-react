import React, {Fragment} from "react";
import {
    Grid,
    InputLabel,
    TextField,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Select,
    MenuItem,
    RadioGroup,
    Button,
    Radio,
    FormLabel,
    Typography
} from "@mui/material";

const styles = {
    textTitle:{
        color: '#646464',
        marginTop: '40px'
    },
    text: {
        color: '#646464'
    },
    finalButton: {
        width: '300px',
        marginTop: '35px'
    },
    textField:{
        width: '100%',
    }
}

const RegisterResults = ({register, errors}) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.textTitle}>Resultados dos Testes</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register("avaliationDate")} label="Data da avaliação" variant="outlined" size="small" sx={styles.textField}/>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <FormControl sx={styles.textField} size="small">
                    <InputLabel id="label">Equipamento</InputLabel>
                    <Select {...register("equipment")} label="Equipamento">
                        <MenuItem value={10}>Equipamento 1</MenuItem>
                        <MenuItem value={20}>Equipamento 2</MenuItem>
                        <MenuItem value={30}>Equipamento 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.text}>IRDA</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl {...register("IRDA")} component="fieldset" variant="standard" size="small" sx={styles.textField}>
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
                <Typography variant="h6" style={styles.text}>Resultado Teste</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.textField} size="small">
                    <InputLabel>Tipo de teste</InputLabel>
                    <Select label="Tipo de teste" {...register("type")}>
                        <MenuItem value={0}>EOET</MenuItem>
                        <MenuItem value={1}>PEATE-A</MenuItem>
                        <MenuItem value={2}>EOET + PEATE-A</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl component="fieldset" size="small" sx={styles.textField}>
                    <FormLabel component="legend"> Orelha Esquerda</FormLabel>
                    <RadioGroup {...register("resultLeftEar")} defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou"/>
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl component="fieldset" size="small" sx={styles.textField}>
                    <FormLabel component="legend"> Orelha Direita</FormLabel>
                    <RadioGroup {...register("resultRightEar")} defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou"/>
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.text}>Informações adicionais</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField label="Observação" multiline variant="outlined" size="small" sx={styles.textField}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.textField} size="small">
                    <InputLabel>Conduta</InputLabel>
                    <Select label="Conduta" {...register("conduct")}>
                        <MenuItem value={0}>Conduta1</MenuItem>
                        <MenuItem value={1}>Conduta2</MenuItem>
                        <MenuItem value={2}>Conduta3</MenuItem>
                        <MenuItem value={2}>Conduta4</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.textField} size="small">
                    <InputLabel>Orientação</InputLabel>
                    <Select label="Orientação" {...register("orientation")}>
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
}

export default RegisterResults;
