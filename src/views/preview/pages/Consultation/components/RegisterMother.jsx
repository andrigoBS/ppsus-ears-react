import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function RegisterMother() {
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

                <h4>IRDA</h4>
                <FormControl component="fieldset" variant="standard">
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Prematuridade"
                        />
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Baixo peso ao nascer"
                        />
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Hiperbilirrubinemia"
                        />
                    </FormGroup>
                </FormControl>

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
            </Box>
        </div>

    );
}

export default RegisterMother;
