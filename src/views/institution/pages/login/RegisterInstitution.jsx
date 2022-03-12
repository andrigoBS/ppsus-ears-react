import React from "react";
import {useForm} from "react-hook-form";
import {
    Button,
    Paper,
    Box,
    TextField,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    useTheme,
    Grid, AlertTitle, Alert, Stack
} from "@mui/material";
import HtmlHead from "../../../../components/HtmlHead";
import BrazilianPhoneField from "../../../../components/BrazilianPhoneField";

const createStyles = (theme) => ({
    paper: {
        margin: '0px',
        padding: '30px',

        [theme.breakpoints.up('sm')]: {
            margin: '40px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '10%',
            marginRight: '10%',
        },
    },
    grid: {
        display: 'grid',
        gap: 2,
        width: 'auto',
        [theme.breakpoints.up('xl')]: {
            width: '1200px',
        },
    },
    textTitle:{
        color: '#646464',
        marginBottom: '40px'
    },
    text: {
        color: '#646464'
    },
    finalButton: {
        marginTop: '35px',
        width: 'fit-content',
    },
    gridItem: {
        width: 'auto'
    },
    textField:{
        width: '100%',
    }
});

const RegisterInstitution = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const theme = useTheme();
    const styles = createStyles(theme);
    const onSubmit = (data) => {
        // @TODO Criar um httpHelper
    }

    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={'Instituição'} subTitle={'Cadastro'}/>
            <h2 style={styles.textTitle}>Cadastro Instituição</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <Grid container spacing={2}>
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
                            <h4 style={styles.text}>Tipo de Instituição</h4>
                            <FormControl required>
                                <RadioGroup {...register("institutionType")} defaultValue={"Hospital"}>
                                    <FormControlLabel value={"Hospital"} control={<Radio/>} label="Hospital"/>
                                    <FormControlLabel value={"Maternidade"} control={<Radio/>} label="Maternidade"/>
                                    <FormControlLabel value={"Maternidade"} control={<Radio/>} label="Hospital e Maternidade"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <h4 style={styles.text}>Contato</h4>
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
                            <h4 style={styles.text}>Endereço</h4>
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
                            <h4 style={styles.text}>Dados do Responsável da Instituição</h4>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField style={styles.textField} {...register("nameOfResponsible")} label="Nome do Responsável" variant="outlined" size="small" required/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField style={styles.textField} {...register("postOfResponsible")} label="Cargo" variant="outlined" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Button sx={styles.finalButton} color="secondary" variant="contained">
                                Finalizar cadastro
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
                <Alert
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            </Stack>
        </Paper>
    );
}
export default RegisterInstitution;
