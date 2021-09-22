import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

function RegisterReferralService() {
    const styles = {
        paper:{
            width: '30%',
            marginLeft: '30%',
            marginRight: '30%',
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
            <h1 style={styles.text}>Cadastro Serviço de Referência</h1>
            <Box sx={styles.grid}>
                <TextField label="Nome" variant="outlined" size="small"/>
                <TextField label="Nome Fantasia" variant="outlined" size="small"/>
                <TextField label="CNPJ" variant="outlined" size="small"/>
                <TextField label="Razão Social" variant="outlined" size="small"/>
                <FormControl>
                    <RadioGroup defaultValue={"SUS"}>
                        <FormControlLabel value={"SUS"} control={<Radio/>} label="SUS" />
                        <FormControlLabel value={"Privado"} control={<Radio/>} label="Privado" />
                    </RadioGroup>
                </FormControl>
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

export default RegisterReferralService;
