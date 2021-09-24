import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import HtmlHead from "../../../components/HtmlHead";

function RegisterTherapist() {
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
            <HtmlHead view={'Fono'} subTitle={'Cadastro'}/>
            <h1 style={styles.text}>Cadastro Fono</h1>
            <Box sx={styles.grid}>
                <TextField label="Nome" variant="outlined" size="small"/>
                <TextField label="Senha" type="password" variant="outlined" size="small"/>
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
                <FormControl sx={{maxWidth: 450 }}>
                    <InputLabel id="label">Instituição</InputLabel>
                    <Select label="Instituição">
                        <MenuItem value={10}>HOSPITAL DE FLORIANOPOLIS</MenuItem>
                        <MenuItem value={20}>HOSPITAL SANTO ANTONIO IMAS</MenuItem>
                        <MenuItem value={30}>HOSPITAL SANTA JULIANA</MenuItem>
                    </Select>
                </FormControl>
                <Button sx={styles.button} variant="contained">
                    Adicionar instituição
                </Button>
                <Button sx={styles.finalButton} variant="outlined">
                    Finalizar cadastro
                </Button>
            </Box>
        </Paper>
    );
}

export default RegisterTherapist;
