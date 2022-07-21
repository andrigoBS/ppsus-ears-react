import React from "react";
import TextField from "@mui/material/TextField";
import {Grid, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import BaseRegisterPaper from "../../../../components/bases/BaseRegisterPaper";
import SecretaryService from "../../../../services/secretary/SecretaryService";

const RegisterSecretary = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={"Secretaria"} serviceFunction={SecretaryService.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register("nameOfSecretary")} label="Nome Secretaria" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={"h6"}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("preferentialEmail")} label="E-mail Preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={"h6"}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("state")} label="Estado" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("city")} label="Cidade" variant="outlined" size="small" required/>
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterSecretary;
