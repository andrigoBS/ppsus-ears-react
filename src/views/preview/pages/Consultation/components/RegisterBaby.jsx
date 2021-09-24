import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function RegisterBaby() {
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
    }

    return (
        <div>
            <Box sx={styles.grid}>
                <TextField label="Peso" variant="outlined" size="small"/>
                <TextField label="Altura" variant="outlined" size="small"/>
                <TextField label="Circunferência" variant="outlined" size="small"/>
                <TextField label="Data de nascimento" variant="outlined" size="small"/>
                <TextField label="Idade gestacional" variant="outlined" size="small"/>
                <TextField label="Tipo de parto" variant="outlined" size="small"/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Obto materno" />
                </FormGroup>
            </Box>
        </div>

    );
}

export default RegisterBaby;
