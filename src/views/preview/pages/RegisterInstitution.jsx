import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import HtmlHead from "../../../components/HtmlHead";
import BrazilianPhoneField from "../../../components/BrazilianPhoneField";

const styles = {
    paper: {
        width: 'auto',
        margin: '4%',
        padding: '30px',
    },
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
        width: '40%'
    },
    finalButton: {
        width: '50%',
        marginTop: '35px'
    }
}

function RegisterInstitution() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // @TODO Criar um httpHelper
    }

    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={'Instituição'} subTitle={'Cadastro'}/>
            <h1 style={styles.text}>Cadastro Instituição</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <TextField {...register("nameOfInstitution")} label="Nome instituição" variant="outlined" size="small"/>
                    <TextField {...register("password")} label="Senha" type="password" variant="outlined" size="small"/>
                    <TextField {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small"/>
                    <TextField {...register("CNPJ")} label="CNPJ" variant="outlined" size="small"/>
                    <TextField {...register("CNES")} label="CNES" variant="outlined" size="small"/>

                    <h4>Contato</h4>
                    <TextField {...register("preferentialEmail")} label="E-mail Preferencial" variant="outlined" size="small" required/>
                    <TextField {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small"/>
                    <BrazilianPhoneField register={register} name="phonePrimary" error={errors.phonePrimary}
                                         label="Telefone Institucional" variant="outlined" size="small" required
                    />
                    <BrazilianPhoneField register={register} name="phoneSecond" error={errors.phoneSecond}
                                         label="Telefone Celular Institucional" variant="outlined" size="small"
                    />

                    <h4>Endereço</h4>
                    <TextField {...register("CEP")} label="CEP" variant="outlined" size="small"/>
                    <TextField {...register("street")} label="Logradouro" variant="outlined" size="small"/>
                    <TextField {...register("number")} label="Número" variant="outlined" size="small"/>
                    <TextField {...register("state")} label="Estado" variant="outlined" size="small"/>
                    <TextField {...register("city")} label="Cidade" variant="outlined" size="small"/>
                    <TextField {...register("complement")} label="Complemento" variant="outlined" size="small"/>

                    <h4>Dados do Responsável da Instituição</h4>
                    <TextField {...register("nameOfResponsible")} label="Nome do Responsável" variant="outlined" size="small"/>
                    <TextField {...register("postOfResponsible")} label="Cargo" variant="outlined" size="small"/>
                    <Button sx={styles.finalButton} variant="outlined">
                        Finalizar cadastro
                    </Button>
                </Box>
            </form>
        </Paper>

    );
}

export default RegisterInstitution;
