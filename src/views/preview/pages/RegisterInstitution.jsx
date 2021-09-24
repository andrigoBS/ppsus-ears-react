import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

function RegisterInstitution() {
    const styles = {
        paper:{
            width: 'auto',
            margin: '4%',
            padding: '30px',
        },
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
            width: '40%'
        },
        finalButton:{
            width: '50%',
            marginTop: '35px'
        }
    }

    return (
        <Paper sx={styles.paper}>
            <h1 style={styles.text}>Cadastro Instituição</h1>
            <Box sx={styles.grid}>
                <TextField label="Nome" variant="outlined" size="small"/>
                <TextField label="Senha" type="password" variant="outlined" size="small"/>
                <TextField label="CNPJ" variant="outlined" size="small"/>
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
                <h4>Endereço</h4>
                <TextField label="Rua" variant="outlined" size="small"/>
                <TextField label="Estado" variant="outlined" size="small"/>
                <TextField label="Cidade" variant="outlined" size="small"/>
                <TextField label="Complemento" variant="outlined" size="small"/>
                <TextField label="Número" variant="outlined" size="small"/>
                <Button sx={styles.finalButton} variant="outlined">
                    Finalizar cadastro
                </Button>
            </Box>
        </Paper>

    );
}

export default RegisterInstitution;
