import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import BrazilianPhoneField from "../../../../../components/BrazilianPhoneField";

const styles = {
    grid: {
        display: 'grid',
        gap: 2,
    },
    textTitle:{
        color: '#646464',
        marginTop: '40px'
    },
    text: {
        color: '#646464'
    },
}

const RegisterMother = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        // @TODO Criar um httpHelper
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.grid}>
                <h4 style={styles.textTitle}>Informações pessoais</h4>
                <TextField {...register("name")} label="Nome completo da mãe" variant="outlined" size="small" required/>
                <TextField {...register("birthdate")} label="Data de nascimento" variant="outlined" size="small" required/>

                <h4 style={styles.text}>Contato</h4>
                <TextField {...register("preferentialEmail")} label="E-mail Preferencial" variant="outlined" size="small" required/>
                <TextField {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small"/>
                <BrazilianPhoneField register={register} name="phonePrimary" error={errors.phonePrimary}
                                     label="Telefone Residencial" variant="outlined" size="small" required
                />
                <BrazilianPhoneField register={register} name="phoneSecond" error={errors.phoneSecond}
                                     label="Telefone Celular" variant="outlined" size="small"
                />

                <h4 style={styles.text}>Endereço</h4>
                <TextField {...register("CEP")} label="CEP" variant="outlined" size="small" required/>
                <TextField {...register("street")} label="Logradouro" variant="outlined" size="small" required/>
                <TextField {...register("number")} label="Número" variant="outlined" size="small"/>
                <TextField {...register("state")} label="Estado" variant="outlined" size="small" required/>
                <TextField {...register("city")} label="Cidade" variant="outlined" size="small" required/>
                <TextField {...register("complement")} label="Complemento" variant="outlined" size="small"/>
            </Box>
        </form>
    );
}

export default RegisterMother;
