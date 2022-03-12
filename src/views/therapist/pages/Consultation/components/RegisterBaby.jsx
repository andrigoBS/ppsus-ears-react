import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useForm} from "react-hook-form";

const styles = {
    grid: {
        display: 'grid',
        gap: 2,
    },
    margin: {
        marginTop: '40px'
    },
}

const RegisterBaby = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        // @TODO Criar um httpHelper
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.grid}>
                <TextField {...register("name")} style={styles.margin} label="Nome do Bebê" variant="outlined" size="small"/>
                <TextField {...register("weight")} label="Peso" variant="outlined" size="small"/>
                <TextField {...register("height")} label="Altura" variant="outlined" size="small"/>
                <TextField {...register("cephalicPerimeter")} label="Perímetro Cefálico" variant="outlined" size="small"/>
                <TextField {...register("birthdate")} label="Data de nascimento" variant="outlined" size="small"/>
                <TextField {...register("gestacionalAge")} label="Idade gestacional" variant="outlined" size="small"/>
                <TextField {...register("type")} label="Tipo de parto" variant="outlined" size="small"/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Óbito materno"/>
                </FormGroup>
            </Box>
        </form>

    );
}

export default RegisterBaby;
