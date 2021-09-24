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

function RegisterResults() {
    const styles = {
        grid:{
            display: 'grid',
            width: '85%',
            gap: 2,
            padding: '40px'
        },
        text:{
            marginLeft: '30px'
        },
        button:{
            width: '50%'
        },
        finalButton:{
            width: '60%',
            marginTop: '35px'
        }
    }

    return (
        <div>
            <Box sx={styles.grid}>
                <TextField label="Data da avaliação" variant="outlined" size="small"/>
                <FormControl sx={{maxWidth: 450 }}>
                    <InputLabel id="label">Equipamento</InputLabel>
                    <Select label="Equipamento">
                        <MenuItem value={10}>Equipamento 1</MenuItem>
                        <MenuItem value={20}>Equipamento 2</MenuItem>
                        <MenuItem value={30}>Equipamento 3</MenuItem>
                    </Select>
                </FormControl>

                <h4>IRDA</h4>
                <FormControl component="fieldset" variant="standard">
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


                <h4>Resultado Teste</h4>
                <TextField label="Tipo de teste" variant="outlined" size="small"/>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> Orelha Direita</FormLabel>
                    <RadioGroup defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou" />
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> Orelha Esquerda</FormLabel>
                    <RadioGroup defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou" />
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou" />
                    </RadioGroup>
                </FormControl>

                <h4>Resultado Reteste</h4>
                <TextField label="Tipo de teste" variant="outlined" size="small"/>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> Orelha Direita</FormLabel>
                    <RadioGroup defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou" />
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> Orelha Esquerda</FormLabel>
                    <RadioGroup defaultValue="passou">
                        <FormControlLabel value="passou" control={<Radio/>} label="Passou" />
                        <FormControlLabel value="falhou" control={<Radio/>} label="Falhou" />
                    </RadioGroup>
                </FormControl>

                <h4>Informações adicionais</h4>
                <TextField label="Conduta" multiline variant="outlined" size="small"/>
                <TextField label="Orientação" multiline variant="outlined" size="small"/>
                <TextField label="Observação" multiline variant="outlined" size="small"/>
            </Box>
        </div>

    );
}

export default RegisterResults;
