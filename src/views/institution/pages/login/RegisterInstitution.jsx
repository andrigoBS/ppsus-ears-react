import React from "react";

import {useForm} from "react-hook-form";
import {TextField, FormControl, RadioGroup, FormControlLabel, Radio, Grid, Typography} from "@mui/material";
import BrazilianPhoneField from "../../../../components/BrazilianPhoneField";
import GenericRegisterPaper from "../../../generic/GenericRegisterPaper";
import InstitutionService from "../../../../services/institution/InstitutionService";

const styles = {
    text: {
        color: '#646464',
        fontWeight: 'bold',
    },
    textField:{
        width: '100%',
    }
};

const RegisterInstitution = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <GenericRegisterPaper handleSubmit={handleSubmit} title={"Instituição"} service={InstitutionService}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField sx={styles.textField} {...register("nameOfInstitution")} label="Nome instituição" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("CNES")} label="CNES" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("CNPJ")} label="CNPJ" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography style={styles.text} variant={"h6"}>
                    Tipo de Instituição
                </Typography>
                <FormControl required>
                    <RadioGroup {...register("institutionType")} defaultValue={"Hospital"}>
                        <FormControlLabel value={"Hospital"} control={<Radio/>} label="Hospital"/>
                        <FormControlLabel value={"Maternidade"} control={<Radio/>} label="Maternidade"/>
                        <FormControlLabel value={"Hospital e Maternidade"} control={<Radio/>} label="Hospital e Maternidade"/>
                    </RadioGroup>
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
                                     label="Telefone Institucional" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField sx={styles.textField} register={register} name="phoneSecond" error={errors.phoneSecond}
                                     label="Telefone Celular Institucional" variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography style={styles.text} variant={"h6"}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("CEP")} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("street")} label="Logradouro" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("state")} label="Estado" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("city")} label="Cidade" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("number")} label="Número" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("complement")} label="Complemento" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography style={styles.text} variant={"h6"}>
                    Dados do Responsável da Instituição
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("nameOfResponsible")} label="Nome do Responsável" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField style={styles.textField} {...register("postOfResponsible")} label="Cargo" variant="outlined" size="small"/>
            </Grid>
        </GenericRegisterPaper>
    );
}
export default RegisterInstitution;
