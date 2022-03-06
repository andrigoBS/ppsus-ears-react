import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";

const styles = {
    grid: {
        display: 'grid',
        gap: 2,
    },
    text: {
        color: '#646464'
    },
    margin: {
        marginTop: '40px'
    },
    finalButton: {
        width: '300px',
        marginTop: '35px'
    }
}

function RegisterResults() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        //TherapistService.register(data, (response) => alert(response));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.grid}>
                <TextField {...register("avaliationDate")} style={styles.margin} label="Data da avaliação" variant="outlined" size="small"/>
                <FormControl sx={{maxWidth: 450}} size={"small"}>
                    <InputLabel id="label">Equipamento</InputLabel>
                    <Select {...register("equipment")} label="Equipamento">
                        <MenuItem value={10}>Equipamento 1</MenuItem>
                        <MenuItem value={20}>Equipamento 2</MenuItem>
                        <MenuItem value={30}>Equipamento 3</MenuItem>
                    </Select>
                </FormControl>

                <h4 style={styles.text}>IRDA</h4>
                <FormControl {...register("IRDA")} component="fieldset" variant="standard">
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

                <h4 style={styles.text}>Resultado Teste</h4>
                <FormControl sx={{maxWidth: 450 }} size="small">
                    <InputLabel>Tipo de teste</InputLabel>
                    <Select label="Tipo de teste" {...register("type")}>
                        <MenuItem value={0}>EOET</MenuItem>
                        <MenuItem value={1}>PEATE-A</MenuItem>
                        <MenuItem value={2}>EOET + PEATE-A</MenuItem>
                    </Select>
                </FormControl>

                <FormControl component="fieldset">
                    <FormLabel component="legend"> Orelha Direita</FormLabel>
                    <RadioGroup {...register("resultRightEar")} defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou"/>
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> Orelha Esquerda</FormLabel>
                    <RadioGroup {...register("resultLeftEar")} defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou"/>
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou"/>
                    </RadioGroup>
                </FormControl>

                <h4 style={styles.text}>Informações adicionais</h4>
                <TextField label="Observação" multiline variant="outlined" size="small"/>
                <FormControl sx={{maxWidth: 450 }} size="small">
                    <InputLabel>Conduta</InputLabel>
                    <Select label="Conduta" {...register("conduct")}>
                        <MenuItem value={0}>Conduta1</MenuItem>
                        <MenuItem value={1}>Conduta2</MenuItem>
                        <MenuItem value={2}>Conduta3</MenuItem>
                        <MenuItem value={2}>Conduta4</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{maxWidth: 450 }} size="small">
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
            </Box>
        </form>
    );
}

export default RegisterResults;
