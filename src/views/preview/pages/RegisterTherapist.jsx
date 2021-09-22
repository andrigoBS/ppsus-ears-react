import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

function RegisterTherapist() {
    const styles = {
        paper:{
            width: '30%',
            marginLeft: '30%',
            padding: '30px'
        },
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
        }

    }

    return (
        <Paper sx={styles.paper}>
            <h1 style={styles.text}>Cadastro Fono</h1>
            <Box sx={styles.grid}>
                <TextField label="Nome" variant="outlined" size="small"/>
                <TextField label="CRFa" variant="outlined" size="small"/>
                <TextField label="Data de início do teste" variant="outlined" size="small"/>
                <h4>Contato</h4>
                <TextField label="E-mail" variant="outlined" size="small"/>
                <TextField label="Apelido para o e-mail" variant="outlined" size="small"/>
                <Button sx={styles.button} variant="contained">
                    Adicionar e-mail
                </Button>
                <TextField label="Telefone" variant="outlined" size="small"/>
                <TextField label="Apelido para o telefone" variant="outlined" size="small"/>
                <Button sx={styles.button} variant="contained">
                    Adicionar telefone
                </Button>
                <h4>Local de trabalho</h4>
                <Button sx={styles.button} variant="contained">
                    Cadastrar
                </Button>
            </Box>
        </Paper>

    );
}

export default RegisterTherapist;
