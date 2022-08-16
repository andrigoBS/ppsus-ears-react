import { Button, Divider, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useViewConfiguration } from '../../../../../providers/viewConfiguration/ViewConfiguration';
import BaseRegisterResponsible from './BaseRegisterResponsible';

const styles = {
    textTitle:{
        marginTop: '40px'
    },
};

const RegisterResponsible = ({ register, errors }) => {
    const configuration = useViewConfiguration();
    const { setValue } = useForm();

    const [states, setStates] = useState([]);
    const [responsibleCount, setResponsibleCount] = useState(0);

    const addClick = () => {
        setResponsibleCount(responsibleCount + 1);
    };

    const removeClick = () => {
        setValue(`responsible.${responsibleCount}`, undefined);
        setResponsibleCount(responsibleCount - 1);
    };

    useEffect(() => {
        configuration.service.getStates().then(r => r.body).then(setStates);
    }, []);

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" style={styles.textTitle}>Informações da Mãe</Typography>
            </Grid>
            <BaseRegisterResponsible register={register} errors={errors} prefixName={'baby.birthMother'} states={states}/>
            {responsibleCount > 0 &&
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6" style={styles.textTitle}>Informações do Responsável</Typography>
                </Grid>
            }
            {Array(responsibleCount).fill(0).map((zero, index) => (
                <Fragment key={`responsible-${index}`}>
                    <Grid sx={{ marginTop: '20px', marginBottom: '40px' }} item md={12} xs={12}>
                        <Divider />
                    </Grid>
                    <BaseRegisterResponsible register={register} errors={errors} prefixName={`baby.guardians.${index}`} states={states}/>
                </Fragment>
            ))}
            <Grid item xs={12} sm={12} md={12}>
                <Button sx={styles.finalButton} color="secondary" variant="contained" onClick={addClick}>
                    Adicionar outro responsável
                </Button>
            </Grid>
            {responsibleCount > 0 &&
                <Grid item xs={12} sm={12} md={12}>
                    <Button sx={styles.finalButton} color="primary" variant="contained" onClick={removeClick}>
                        Remover o último responsável
                    </Button>
                </Grid>
            }
        </Fragment>
    );
};

export default RegisterResponsible;
