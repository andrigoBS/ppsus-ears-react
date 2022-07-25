import { Box, Button, Grid, Step, StepLabel, Stepper } from '@mui/material';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import React from 'react';
import RegisterBaby from './components/RegisterBaby';
import RegisterMother from './components/RegisterMother';
import RegisterResponsible from './components/RegisterResponsible';
import RegisterResults from './components/RegisterResults';
import TherapistService from '../../../../services/therapist/TherapistService';
import { useForm } from 'react-hook-form';

const RegisterConsultation = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const steps = [
        {
            label: 'Cadastro mãe',
            element: <RegisterMother register={register} errors={errors}/>
        },
        {
            label: 'Cadastro outro responsável',
            element: <RegisterResponsible register={register} errors={errors}/>
        },
        {
            label: 'Cadastro Bebê',
            element: <RegisterBaby register={register} errors={errors}/>
        },
        {
            label: 'Registro dos resultados',
            element: <RegisterResults register={register} errors={errors}/>
        }
    ];

    return (
        <BaseRegisterPaper title={'Consulta'} handleSubmit={handleSubmit} serviceFunction={TherapistService.consultationRegister} notSubmitButton={true}>
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
                            <Button onClick={() => setActiveStep(activeStep + 1)}>Próximo</Button>
                    }
                </Box>
            </Grid>
        </BaseRegisterPaper>
    );
};

export default RegisterConsultation;
