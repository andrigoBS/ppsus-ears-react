import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import {useForm} from "react-hook-form";
import BrazilianPhoneField from "../../../components/BrazilianPhoneField";

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
    text: {
        color: '#646464',
    },
    textTitle:{
        color: '#646464',
        marginBottom: '40px'
    },
    finalButton: {
        width: '300px',
        marginTop: '35px'
    }
}

function RegisterReferralService() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        // @TODO Criar um httpHelper
    }

    return (
        <Paper sx={styles.paper}>
            <h2 style={styles.textTitle}>Cadastro Serviço de Referência</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <TextField {...register("name")} label="Nome do Serviço" variant="outlined" size="small" required/>
                    <TextField {...register("CNPJ")} label="CNPJ" variant="outlined" size="small"/>
                    <TextField {...register("CNES")} label="CNES" variant="outlined" size="small" required/>

                    <h4 style={styles.text}>Tipo de Serviço</h4>
                    <FormControl>
                        <RadioGroup {...register("referralServiceType")} defaultValue={"SUS"}>
                            <FormControlLabel value={"SUS"} control={<Radio/>} label="SUS"/>
                            <FormControlLabel value={"Privado"} control={<Radio/>} label="Privado"/>
                            <FormControlLabel value={"Misto"} control={<Radio/>} label="Misto"/>
                        </RadioGroup>
                    </FormControl>

                    <h4 style={styles.text}>Contato</h4>
                    <TextField {...register("preferentialEmail")} label="E-mail Preferencial" variant="outlined"
                               size="small" required/>
                    <TextField {...register("alternativeEmail")} label="E-mail Alternativo" variant="outlined"
                               size="small"/>
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

                    <h4 style={styles.text}>Dados do Responsável do Serviço</h4>
                    <TextField {...register("nameOfResponsible")} label="Nome do Responsável" variant="outlined"
                               size="small" required/>
                    <TextField {...register("postOfResponsible")} label="Cargo" variant="outlined" size="small"/>
                    <Button sx={styles.finalButton} color="secondary" variant="contained">
                        Finalizar cadastro
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default RegisterReferralService;
