import { Box, Button, Grid, Step, StepLabel, Stepper } from '@mui/material';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import React from 'react';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';
import RegisterBaby from './components/RegisterBaby';
import RegisterResponsible from './components/RegisterResponsible';
import RegisterResults from './components/RegisterResults';
import { useForm } from 'react-hook-form';

const RegisterTriage = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const configuration = useViewConfiguration();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const steps = [
        {
            label: 'Cadastrar Responsáveis',
            element: <RegisterResponsible register={register} errors={errors}/>
        },
        {
            label: 'Cadastrar Bebê',
            element: <RegisterBaby register={register} errors={errors}/>
        },
        {
            label: 'Registrar Resultados',
            element: <RegisterResults register={register} errors={errors}/>
        }
    ];

    const handleOnNext = (event) => {
        event.preventDefault();
        setActiveStep(activeStep + 1);
    };

    return (
        <BaseRegisterPaper title={'Resultado da Triagem'} handleSubmit={handleSubmit} serviceFunction={configuration.service.consultationRegister} notSubmitButton={true}>
            <Grid item xs={12} sm={12} md={12}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(({ label }) => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))}
                </Stepper>
            </Grid>
            {steps[activeStep].element}
            <Grid item xs={12} sm={12} md={12}>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep(activeStep - 1)}
                        sx={{ mr: 1 }}
                    >
                        Anterior
                    </Button>
                    {
                        activeStep === steps.length - 1?
                            <Button type="submit">Finalizar Cadastro</Button>
                            :
                            <Button onClick={handleOnNext}>Próximo</Button>
                    }
                </Box>
            </Grid>
        </BaseRegisterPaper>
    );
};

export default RegisterTriage;
