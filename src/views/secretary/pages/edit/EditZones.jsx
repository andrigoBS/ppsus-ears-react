import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import DraggableManyLists from '../../../../components/lists/dragable/DraggableManyLists';

const values = [
    { id: 1, name: 'Zona 1', values: [{ id: 1, name:'cidade 1' }, { id: 2, name:'cidade 2' }] },
    { id: 2, name: 'Zona 2', values: [{ id: 3, name:'cidade 3' }, { id: 4, name:'cidade 4' }] },
    { id: 3, name: 'Zona 3', values: [{ id: 5, name:'cidade 5' }, { id: 6, name:'cidade 6' }] },
    { id: 4, name: 'Zona 4', values: [{ id: 7, name:'cidade 7' }, { id: 8, name:'cidade 8' }] },
    { id: 5, name: 'Zona 5', values: [{ id: 9, name:'cidade 9' }, { id: 10, name:'cidade 10' }] },
    { id: -1, name: 'Cidades não vinculadas', values: [{ id: 11, name:'cidade 11' }, { id: 12, name:'cidade 12' }] },
];

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
        fontSize: '1.05rem',
    },
};

const EditZones = () => {
    const onChange = (event) => {
        console.log(event.target);
    };

    const onSubmit = (event) => {
        console.log('submit');
    };

    return (
        <Grid container spacing={2} sx={styles.container}>
            <Grid item xs={10}>
                <Typography variant='h4'>Gerenciar regiões</Typography>
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
                <DraggableManyLists values={values} onChange={onChange}/>
            </Grid>
        </Grid>
    );
};

export default EditZones;
