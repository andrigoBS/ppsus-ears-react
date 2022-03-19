import React, {Fragment} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import BrazilianPhoneField from "../../../../../components/fileds/BrazilianPhoneField";

const styles = {
    text: {
        color: '#646464'
    },
    textTitle: {
        color: '#646464',
        marginTop: '40px'
    },
    finalButton: {
        width: '300px',
        marginTop: '35px'
    },
    textField:{
        width: '100%',
    }
}

const RegisterResponsible = ({register, errors}) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.textTitle}>Informações pessoais</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <TextField {...register("responsibleName")} label="Nome completo do Responsável" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <TextField {...register("responsibleBirthdate")} label="Data de Nascimento" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.text}>Contato</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsiblePreferentialEmail")} label="E-mail Preferencial" variant="outlined" size="small" sx={styles.textField} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsibleAlternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small" sx={styles.textField}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="responsiblePhonePrimary" error={errors.phonePrimary}
                                     label="Telefone Residencial" variant="outlined" size="small" sx={styles.textField} required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField register={register} name="responsiblePhoneSecond" error={errors.phoneSecond}
                                     label="Telefone Celular" variant="outlined" size="small" sx={styles.textField}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.text}>Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsibleCEP")} label="CEP" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsibleStreet")} label="Logradouro" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsibleNumber")} label="Número" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsibleComplement")} label="Complemento" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsibleState")} label="Estado" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("responsibleCity")} label="Cidade" variant="outlined" size="small" sx={styles.textField} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button sx={styles.finalButton} color="secondary" variant="contained">
                    Adicionar outro responsável
                </Button>
            </Grid>
        </Fragment>
    );
}

export default RegisterResponsible;
