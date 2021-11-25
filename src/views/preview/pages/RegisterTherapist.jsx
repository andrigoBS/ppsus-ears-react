import React from "react";
import { useForm } from "react-hook-form";
import {Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";
import HtmlHead from "../../../components/HtmlHead";
import BrazilianPhoneField from "../../../components/BrazilianPhoneField";
import HttpTherapistHelper from "../../../helpers/HttpTherapistHelper";

const styles = {
    paper:{
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

function RegisterTherapist() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        //HttpTherapistHelper.register(data, (response) => alert(response));
    }
    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={'Fono'} subTitle={'Cadastro'}/>
            <h2 style={styles.textTitle}>Cadastro Fonoaudiólogo</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <TextField {...register("name")} label="Nome Completo" variant="outlined" size="small" required/>
                    <TextField {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
                    <TextField {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
                    <TextField {...register("crfa")} label="CRFa" variant="outlined" size="small" required/>
                    <FormControl sx={{maxWidth: 450 }} size="small" required>
                        <InputLabel>Tempo de experiência</InputLabel>
                        <Select label="Tempo de experiência" {...register("xp")}>
                            <MenuItem value={0}>Menos de 1 ano</MenuItem>
                            <MenuItem value={1}>De 1 a 3 anos</MenuItem>
                            <MenuItem value={2}>De 3 a 5 anos</MenuItem>
                            <MenuItem value={2}>Mais de 5 anos</MenuItem>
                        </Select>
                    </FormControl>
                    <h4 style={styles.text}>Contato</h4>
                    <TextField {...register("preferentialEmail")} label="E-mail Principal" variant="outlined" size="small" required/>
                    <TextField {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small"/>
                    <BrazilianPhoneField register={register} name="phonePrimary" error={errors.phonePrimary}
                                         label="Telefone Principal" variant="outlined" size="small" required
                    />
                    <BrazilianPhoneField register={register} name="phoneSecond" error={errors.phoneSecond}
                                         label="Telefone Alternativo" variant="outlined" size="small"
                    />

                    <h4 style={styles.text}>Local de trabalho</h4>
                    <FormControl sx={{maxWidth: 450 }} size="small" required>
                        <InputLabel>Instituição</InputLabel>
                        <Select {...register("institution")} label="Instituição">
                            <MenuItem value={0}>HOSPITAL DE FLORIANOPOLIS</MenuItem>
                            <MenuItem value={1}>HOSPITAL SANTO ANTONIO IMAS</MenuItem>
                            <MenuItem value={2}>HOSPITAL SANTA JULIANA</MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={styles.button} color="secondary" variant="contained">
                        Adicionar instituição
                    </Button>
                    <Button sx={styles.finalButton} color="secondary" variant="outlined" type="submit">
                        Finalizar cadastro
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default RegisterTherapist;
