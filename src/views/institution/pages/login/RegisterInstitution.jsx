import React from "react";

import {useForm} from "react-hook-form";
import {TextField, FormControl, RadioGroup, FormControlLabel, Radio, Grid, Typography} from "@mui/material";
import BrazilianPhoneField from "../../../../components/fileds/BrazilianPhoneField";
import BaseRegisterPaper from "../../../../components/bases/BaseRegisterPaper";
import InstitutionService from "../../../../services/institution/InstitutionService";

const RegisterInstitution = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={"Instituição"} serviceFunction={InstitutionService.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register("nameOfInstitution")} label="Nome instituição" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("CNES")} label="CNES" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("CNPJ")} label="CNPJ" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={"h6"}>
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
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="phonePrimary" formErrors={errors} label="Telefone Institucional" required />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="phoneSecond" formErrors={errors} label="Telefone Celular Institucional"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={"h6"}>Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("CEP")} label="CEP" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("street")} label="Logradouro" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("state")} label="Estado" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("city")} label="Cidade" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("number")} label="Número" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("complement")} label="Complemento" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={"h6"}>
                    Dados do Responsável da Instituição
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("nameOfResponsible")} label="Nome do Responsável" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register("postOfResponsible")} label="Cargo" variant="outlined" size="small"/>
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterInstitution;
