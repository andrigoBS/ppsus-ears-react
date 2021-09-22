import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

function RegisterSecretary() {
    const styles = {
        paper:{
            width: '30%',
            marginLeft: '30%',
            marginTop: '20px',
            marginBottom: '20px',
            padding: '30px',
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
        },
        finalButton:{
            width: '50%',
            marginTop: '35px'
        }
    }

    return (
        <Paper sx={styles.paper}>
            <h1 style={styles.text}>Cadastro Secretaria do Estado</h1>
            <Box sx={styles.grid}>
                <TextField label="Nome" variant="outlined" size="small"/>
                <TextField label="Senha" type="password" variant="outlined" size="small"/>
                <h4>Contato</h4>
                <TextField label="E-mail" variant="outlined" size="small"/>
                <TextField label="Apelido para o e-mail" variant="outlined" size="small"/>
                <Button sx={styles.button} variant="contained">
                    Adicionar e-mail
                </Button>
                <h4>Endereço</h4>
                <TextField label="Estado" variant="outlined" size="small"/>
                <TextField label="Cidade" variant="outlined" size="small"/>
                <Button sx={styles.finalButton} variant="outlined">
                    Finalizar cadastro
                </Button>
            </Box>
        </Paper>
    );
}

export default RegisterSecretary;
