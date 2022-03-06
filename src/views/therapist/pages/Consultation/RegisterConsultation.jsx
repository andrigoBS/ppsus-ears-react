import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import RegisterResponsible from "./components/RegisterResponsible";
import RegisterBaby from "./components/RegisterBaby";
import RegisterResults from "./components/RegisterResults";
import RegisterMother from "./components/RegisterMother";

const steps = ['Cadastro mãe', 'Cadastro outro responsável' , 'Cadastro Bebe', 'Registro dos resultados'];

export default function RegisterConsultation() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const styles = {
        paper:{
            width: 'auto',
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '30px',
            marginBottom: '30px',
            padding: '50px',
        },
    }

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Paper sx={styles.paper}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <React.Fragment>
                    {activeStep === 0 && <RegisterMother/>}
                    {activeStep === 1 && <RegisterResponsible/>}
                    {activeStep === 2 && <RegisterBaby/>}
                    {activeStep === 3 && <RegisterResults/>}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Anterior
                        </Button>
                        <Button onClick={handleNext}>
                            Próximo
                        </Button>
                    </Box>
                </React.Fragment>
            </Box>
        </Paper>
    );
}
