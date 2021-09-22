import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";


import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";

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
                <h4>IRDA</h4>

                <h4>Teste</h4>
                <FormGroup>
                    <FormLabel component="legend">Orelha esquerda</FormLabel>
                    <FormControlLabel control={<Checkbox/>} label="Passou" />
                    <FormControlLabel disabled control={<Checkbox />} label="Falhou" />
                </FormGroup>

                <TextField label="Rua" variant="outlined" size="small"/>
                <TextField label="Estado" variant="outlined" size="small"/>
                <TextField label="Cidade" variant="outlined" size="small"/>
                <TextField label="Complemento" variant="outlined" size="small"/>
                <TextField label="Número" variant="outlined" size="small"/>
                <Button sx={styles.finalButton} variant="contained">
                    Adicionar outro responsável
                </Button>
            </Box>
        </div>

    );
}

export default RegisterResults;
