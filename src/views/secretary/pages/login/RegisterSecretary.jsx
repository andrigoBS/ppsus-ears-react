import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

const RegisterSecretary = () => {
    const styles = {
        paper: {
            width: 'auto',
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '30px',
            marginBottom: '30px',
            padding: '50px',
        },
        grid:{
            display: 'grid',
            gap: 2,
        },
        text:{
            color: '#646464'
        },
        textTitle:{
            color: '#646464',
            marginBottom: '40px'
        },
        button:{
            width: '300px'
        },
        finalButton:{
            width: '300px',
            marginTop: '35px'
        }
    }

    return (
        <Paper sx={styles.paper}>
            <h2 style={styles.textTitle}>Cadastro Secretaria do Estado</h2>
            <Box sx={styles.grid}>
                <TextField label="Nome" variant="outlined" size="small" required/>
                <TextField label="Senha" type="password" variant="outlined" size="small" required/>
                <h4 style={styles.text}>Contato</h4>
                <TextField label="E-mail Principal" variant="outlined" size="small" required/>
                <TextField label="Apelido para o e-mail" variant="outlined" size="small"/>
                <Button sx={styles.button} color="secondary" variant="contained">
                    Adicionar e-mail
                </Button>
                <h4 style={styles.text}>Endereço</h4>
                <TextField label="Estado" variant="outlined" size="small" required/>
                <TextField label="Cidade" variant="outlined" size="small" required/>
                <Button sx={styles.finalButton} color="secondary" variant="contained">
                    Finalizar cadastro
                </Button>
            </Box>
        </Paper>
    );
}

export default RegisterSecretary;
