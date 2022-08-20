import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography, useTheme } from '@mui/material';
import DraggableManyLists from '../../../../components/lists/dragable/DraggableManyLists';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const createStyles = (theme) => ({
    container: {
        width: 'auto',
        padding: '25px 35px',
    },
    saveButton: {
        color: 'white',
        letterSpacing: '0.00938e',
        textTransform: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '350px',
        }
    },
});

const EditZones = () => {
    const configuration = useViewConfiguration();
    const theme = useTheme();
    const styles = createStyles(theme);

    const [zones, setZones] = useState(null);

    const onDropCity = ({ source, destination }) => {
        const city = zones[source.valueIndex].values.splice(source.subValueIndex, 1)[0];

        zones[destination.valueIndex].values.splice(destination.subValueIndex, 0, city);

        setZones([...zones]);
    };

    const onNewZone = () => {

    };

    const onEditZone = () => {

    };

    const onDeleteZone = (index) => {
        const cities = zones[index].values;

        zones[zones.length - 1].values.push(...cities);

        zones.splice(index, 1);

        setZones([...zones]);
    };

    useEffect(() => {
        configuration.service.getAllZonesWithCities().then(r => r.body).then((setZones));
    }, []);

    return (
        <Grid container spacing={2} sx={styles.container}>
            <Grid item xs={12}>
                <Typography variant='h4'>Gerenciar regiões</Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'grid' }}>
                    <Typography variant='p'>Arraste as cidades para modificar a região</Typography>
                    <Typography variant='p'>Clique no titulo da região para edita-lo</Typography>
                    <Typography variant='p'>Clique no botão adicionar região para criar uma nova região</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Button variant='contained' color='secondary' sx={styles.saveButton} onClick={onNewZone}>Adicionar uma nova região</Button>
            </Grid>
            <Grid item xs={12}>
                {!zones? <CircularProgress/> : <DraggableManyLists values={zones} onDropSubValue={onDropCity} onDeleteValue={onDeleteZone} onEditValue={onEditZone}/>}
            </Grid>
        </Grid>
    );
};

export default EditZones;
