import React from "react";
import { useForm } from "react-hook-form";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import BrazilianPhoneField from "../../../../components/BrazilianPhoneField";
import TherapistService from "../../../../services/therapist/TherapistService";
import GenericRegisterPaper from "../../../generic/GenericRegisterPaper";

const styles = {
    button:{
        width: 'fit-content',
    },
    text: {
        color: '#646464',
        fontWeight: 'bold',
    },
    textField:{
        width: '100%',
    }
}

const RegisterTherapist = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <GenericRegisterPaper handleSubmit={handleSubmit} title={"Fonoaudiólogo"} service={TherapistService}>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("name")} label="Nome Completo" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("crfa")} label="CRFa" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={styles.textField} size="small" required>
                    <InputLabel>Tempo de experiência</InputLabel>
                    <Select label="Tempo de experiência" {...register("xp")}>
                        <MenuItem value={0}>Menos de 1 ano</MenuItem>
                        <MenuItem value={1}>De 1 a 3 anos</MenuItem>
                        <MenuItem value={2}>De 3 a 5 anos</MenuItem>
                        <MenuItem value={2}>Mais de 5 anos</MenuItem>
                    </Select>
                </FormControl>
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
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField sx={styles.textField} register={register} name="phonePrimary" error={errors.phonePrimary}
                                     label="Telefone Principal" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField sx={styles.textField} register={register} name="phoneSecond" error={errors.phoneSecond}
                                     label="Telefone Alternativo" variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography style={styles.text} variant={"h6"}>
                    Local de trabalho
                </Typography>
                <FormControl sx={styles.textField} size="small" required>
                    <InputLabel>Instituição</InputLabel>
                    <Select {...register("institution")} label="Instituição">
                        <MenuItem value={0}>HOSPITAL DE FLORIANOPOLIS</MenuItem>
                        <MenuItem value={1}>HOSPITAL SANTO ANTONIO IMAS</MenuItem>
                        <MenuItem value={2}>HOSPITAL SANTA JULIANA</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button sx={styles.button} color="secondary" variant="contained">
                    Adicionar instituição
                </Button>
            </Grid>
        </GenericRegisterPaper>
    );
}
export default RegisterTherapist;
