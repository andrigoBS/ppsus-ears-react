import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import DraggableManyLists from '../../../../components/lists/dragable/DraggableManyLists';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const styles = {
    container: {
        width: 'auto',
        padding: '25px 35px',
    },
    saveButton: {
        width: '100%',
        color: 'white',
        letterSpacing: '0.00938e',
        textTransform: 'none',
        fontWeight: '600',
        fontSize: '1rem',
    },
};

const EditZones = () => {
    const configuration = useViewConfiguration();

    const [values, setValues] = useState(null);

    const onChange = (event) => {
        setValues(event.target.value);
    };

    const onSubmit = (event) => {
        console.log('submit');
    };

    const onNew = (event) => {
        console.log('submit');
    };

    useEffect(() => {
        configuration.service.getAllZonesWithCities().then(r => r.body).then((setValues));
    }, []);

    return (
        <Grid container spacing={2} sx={styles.container}>
            <Grid item xs={8}>
                <Typography variant='h4'>Gerenciar regiões</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant='contained' color='secondaryBlue' sx={styles.saveButton} onClick={onNew}>Adicionar uma nova região</Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant='contained' color='secondary' sx={styles.saveButton} onClick={onSubmit}>Salvar alterações</Button>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'grid' }}>
                    <Typography variant='p'>Arraste as cidades para modificar a região</Typography>
                    <Typography variant='p'>Clique no titulo da região para edita-lo</Typography>
                    <Typography variant='p'>Clique no botão adicionar região para criar uma nova região</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                {values? <DraggableManyLists values={values} onChange={onChange}/> : <CircularProgress/>}
            </Grid>
        </Grid>
    );
};

export default EditZones;
