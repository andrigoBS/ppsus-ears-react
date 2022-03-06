import React from "react";
import {useForm} from "react-hook-form";
import {Button, Paper, Box, TextField, FormControl, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import HtmlHead from "../../../../components/HtmlHead";
import BrazilianPhoneField from "../../../../components/BrazilianPhoneField";

const styles = {
    paper: {
        width: 'auto',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '30px',
        marginBottom: '30px',
        padding: '50px',
    },
    grid: {
        display: 'grid',
        gap: 2,
    },
    textTitle:{
        color: '#646464',
        marginBottom: '40px'
    },
    text: {
        color: '#646464'
    },
    finalButton: {
        width: '300px',
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
            <h2 style={styles.textTitle}>Cadastro Instituição</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <TextField {...register("nameOfInstitution")} label="Nome instituição" variant="outlined" size="small" required/>
                    <TextField {...register("password")} label="Senha" type="password" variant="outlined" size="small" required/>
                    <TextField {...register("passwordConfirm")} label="Confirmação de Senha" type="password" variant="outlined" size="small" required/>
                    <TextField {...register("CNPJ")} label="CNPJ" variant="outlined" size="small"/>
                    <TextField {...register("CNES")} label="CNES" variant="outlined" size="small" required/>

                    <h4 style={styles.text}>Tipo de Instituição</h4>
                    <FormControl required>
                        <RadioGroup {...register("institutionType")} defaultValue={"Hospital"}>
                            <FormControlLabel value={"Hospital"} control={<Radio/>} label="Hospital"/>
                            <FormControlLabel value={"Maternidade"} control={<Radio/>} label="Maternidade"/>
                            <FormControlLabel value={"Maternidade"} control={<Radio/>} label="Hospital e Maternidade"/>
                        </RadioGroup>
                    </FormControl>

                    <h4 style={styles.text}>Contato</h4>
                    <TextField {...register("preferentialEmail")} label="E-mail Preferencial" variant="outlined" size="small" required/>
                    <TextField {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined" size="small"/>
                    <BrazilianPhoneField register={register} name="phonePrimary" error={errors.phonePrimary}
                                         label="Telefone Institucional" variant="outlined" size="small" required
                    />
                    <BrazilianPhoneField register={register} name="phoneSecond" error={errors.phoneSecond}
                                         label="Telefone Celular Institucional" variant="outlined" size="small"
                    />

                    <h4 style={styles.text}>Endereço</h4>
                    <TextField {...register("CEP")} label="CEP" variant="outlined" size="small" required/>
                    <TextField {...register("street")} label="Logradouro" variant="outlined" size="small" required/>
                    <TextField {...register("number")} label="Número" variant="outlined" size="small"/>
                    <TextField {...register("state")} label="Estado" variant="outlined" size="small" required/>
                    <TextField {...register("city")} label="Cidade" variant="outlined" size="small" required/>
                    <TextField {...register("complement")} label="Complemento" variant="outlined" size="small"/>

                    <h4 style={styles.text}>Dados do Responsável da Instituição</h4>
                    <TextField {...register("nameOfResponsible")} label="Nome do Responsável" variant="outlined" size="small" required/>
                    <TextField {...register("postOfResponsible")} label="Cargo" variant="outlined" size="small"/>
                    <Button sx={styles.finalButton} color="secondary" variant="contained">
                        Finalizar cadastro
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default RegisterInstitution;
