import React from "react";
import TextField from "@mui/material/TextField";
import {Grid, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import BaseRegisterPaper from "../../../../components/bases/BaseRegisterPaper";
import SecretaryService from "../../../../services/secretary/SecretaryService";

const styles = {
    text: {
        color: '#646464',
        fontWeight: 'bold',
    },
    textField:{
        width: '100%',
    }
};

const RegisterSecretary = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={"Secretaria"} service={SecretaryService}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField sx={styles.textField} {...register("nameOfSecretary")} label="Nome Secretaria" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Typography style={styles.text} variant={"h6"}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("preferentialEmail")} label="E-mail Preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField}  {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography style={styles.text} variant={"h6"}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("state")} label="Estado" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("city")} label="Cidade" variant="outlined" size="small" required/>
            </Grid>
        </BaseRegisterPaper>
    );
}
export default RegisterSecretary;
