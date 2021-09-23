import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

function RegisterResponsible() {
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
                <h4>Informações pessoais</h4>
                <TextField label="Nome" variant="outlined" size="small"/>
                <TextField label="Idade" variant="outlined" size="small"/>

                <TextField label="Indicadores" variant="outlined" size="small"/>

                <h4>Contato</h4>
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
                <Button sx={styles.finalButton} variant="contained">
                    Adicionar outro responsável
                </Button>
            </Box>
        </div>

    );
}

export default RegisterResponsible;
