import React from "react";
import { useForm } from "react-hook-form";
import {Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";
import HtmlHead from "../../../components/HtmlHead";
import BrazilianPhoneField from "../../../components/BrazilianPhoneField";
import HttpTherapistHelper from "../../../helpers/HttpTherapistHelper";

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

function RegisterTherapist() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        //HttpTherapistHelper.register(data, (response) => alert(response));
    }
    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={'Fono'} subTitle={'Cadastro'}/>
            <h1 style={styles.text}>Cadastro Fonoaudiólogo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <TextField {...register("name")} label="Nome Completo" variant="outlined" size="small"/>
                    <TextField {...register("password")} label="Senha" type="password" variant="outlined" size="small"/>
                    <TextField {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small"/>
                    <TextField {...register("crfa")} label="CRFa" variant="outlined" size="small"/>
                    <FormControl sx={{maxWidth: 450 }} size="small">
                        <InputLabel>Tempo de experiência</InputLabel>
                        <Select label="Tempo de experiência" {...register("xp")}>
                            <MenuItem value={0}>Menos de 1 ano</MenuItem>
                            <MenuItem value={1}>De 1 á 3 anos</MenuItem>
                            <MenuItem value={2}>De 3 á 5 anos</MenuItem>
                            <MenuItem value={2}>Mais de 5 anos</MenuItem>
                        </Select>
                    </FormControl>
                    <h4>Contato</h4>
                    <TextField label="E-mail Principal" variant="outlined" size="small" required/>
                    <TextField label="E-mail Alternativo" variant="outlined" size="small"/>
                    <BrazilianPhoneField register={register} name="phonePrimary" error={errors.phonePrimary}
                                         label="Telefone Principal" variant="outlined" size="small" required
                    />
                    <BrazilianPhoneField register={register} name="phoneSecond" error={errors.phoneSecond}
                                         label="Telefone Alternativo" variant="outlined" size="small"
                    />
                    <h4>Local de trabalho</h4>
                    <FormControl sx={{maxWidth: 450 }} size="small">
                        <InputLabel>Instituição</InputLabel>
                        <Select label="Instituição">
                            <MenuItem value={0}>HOSPITAL DE FLORIANOPOLIS</MenuItem>
                            <MenuItem value={1}>HOSPITAL SANTO ANTONIO IMAS</MenuItem>
                            <MenuItem value={2}>HOSPITAL SANTA JULIANA</MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={styles.button} variant="contained">
                        Adicionar instituição
                    </Button>
                    <Button sx={styles.finalButton} variant="outlined" type="submit">
                        Finalizar cadastro
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default RegisterTherapist;
