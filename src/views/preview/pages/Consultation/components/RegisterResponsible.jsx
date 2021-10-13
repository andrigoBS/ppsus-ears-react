import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import BrazilianPhoneField from "../../../../../components/BrazilianPhoneField";

const styles = {
    grid: {
        display: 'grid',
        width: '85%',
        gap: 2,
        padding: '40px'
    },
    text: {
        marginLeft: '30px'
    },
    button: {
        width: '50%'
    },
    finalButton: {
        width: '60%',
        marginTop: '35px'
    }
}

function RegisterResponsible() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        // @TODO Criar um httpHelper
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <h4>Informações pessoais</h4>
                    <TextField {...register("name")} label="Nome completo do Responsável" variant="outlined" size="small"/>
                    <TextField {...register("birthdate")} label="Data de Nascimento" variant="outlined" size="small"/>

                    <h4>Contato</h4>
                    <TextField {...register("preferentialEmail")} label="E-mail Preferencial" variant="outlined" size="small" required/>
                    <TextField {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small"/>
                    <BrazilianPhoneField register={register} name="phonePrimary" error={errors.phonePrimary}
                                         label="Telefone Residencial" variant="outlined" size="small" required
                    />
                    <BrazilianPhoneField register={register} name="phoneSecond" error={errors.phoneSecond}
                                         label="Telefone Celular" variant="outlined" size="small"
                    />

                    <h4>Endereço</h4>
                    <TextField {...register("CEP")} label="CEP" variant="outlined" size="small"/>
                    <TextField {...register("street")} label="Logradouro" variant="outlined" size="small"/>
                    <TextField {...register("number")} label="Número" variant="outlined" size="small"/>
                    <TextField {...register("state")} label="Estado" variant="outlined" size="small"/>
                    <TextField {...register("city")} label="Cidade" variant="outlined" size="small"/>
                    <TextField {...register("complement")} label="Complemento" variant="outlined" size="small"/>
                    <Button sx={styles.finalButton} variant="contained">
                        Adicionar outro responsável
                    </Button>
                </Box>
            </form>
        </div>
    );
}

export default RegisterResponsible;
