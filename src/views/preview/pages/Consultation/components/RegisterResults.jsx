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

function RegisterResults() {
    const styles = {
        grid:{
            display: 'grid',
            width: '90%',
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
                <TextField label="Data da deliberação" variant="outlined" size="small"/>

                <FormControl sx={{maxWidth: 450 }}>
                    <InputLabel id="label">Equipamento</InputLabel>
                    <Select label="Equipamento">
                        <MenuItem value={10}>Equipamento 1</MenuItem>
                        <MenuItem value={20}>Equipamento 2</MenuItem>
                        <MenuItem value={30}>Equipamento 3</MenuItem>
                    </Select>
                </FormControl>

                <h4>IRDA</h4>

                <h4>Resultado Teste</h4>
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
                <TextField label="Orientação" multiline variant="outlined" size="small"/>
                <TextField label="Observação" multiline variant="outlined" size="small"/>
            </Box>
        </div>

    );
}

export default RegisterResults;
