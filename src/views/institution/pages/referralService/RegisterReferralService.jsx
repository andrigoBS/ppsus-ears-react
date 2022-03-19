import React from "react";

import TextField from "@mui/material/TextField";
import {Grid, Typography} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import {useForm} from "react-hook-form";
import BrazilianPhoneField from "../../../../components/fileds/BrazilianPhoneField";
import ReferralService from "../../../../services/refererralService/ReferralService";
import BaseRegisterPaper from "../../../../components/bases/BaseRegisterPaper";

const styles = {
    text: {
        color: '#646464',
        fontWeight: 'bold',
    },
    textField:{
        width: '100%',
    }
}

const RegisterReferralService = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={"Serviço de Referência"} service={ReferralService}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField sx={styles.textField} {...register("name")} label="Nome do Serviço" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("CNPJ")} label="CNPJ" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField sx={styles.textField} {...register("CNES")} label="CNES" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography style={styles.text} variant={"h6"}>
                    Tipo de Serviço
                </Typography>
                <FormControl>
                    <RadioGroup {...register("referralServiceType")} defaultValue={"SUS"}>
                        <FormControlLabel value={"SUS"} control={<Radio/>} label="SUS"/>
                        <FormControlLabel value={"Privado"} control={<Radio/>} label="Privado"/>
                        <FormControlLabel value={"Misto"} control={<Radio/>} label="Misto"/>
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
                    Dados do Responsável do Serviço
                </Typography>
                <TextField style={styles.textField} {...register("nameOfResponsible")} label="Nome do Responsável" variant="outlined"
                           size="small" required/>
            </Grid>
        </BaseRegisterPaper>
    );
}
export default RegisterReferralService;
