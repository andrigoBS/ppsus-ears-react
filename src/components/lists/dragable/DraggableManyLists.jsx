import { Box, Button, Grid, IconButton, Paper, Typography, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React  from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const createStyles = (theme) => ({
    listContainer: {
        backgroundColor: theme.palette.secondaryBlue.main,
        padding: '5px',
    },
    itemPaper: {
        padding: '10px',
        margin: '10px'
    },
    headerPaper: {
        margin: '5px 10px'
    },
    addButton: {
        width: '100%',
        color: 'white',
        letterSpacing: '0.00938e',
        textTransform: 'none',
        fontWeight: '600',
        fontSize: '1.05rem',
    },
});

const DraggableManyLists = ({ values, onChange }) =>  {
    const theme = useTheme();
    const styles = createStyles(theme);

    const handleOnDragEnd = (result) => {
        console.log(result);
    };

    const onDelete = () => {
        console.log('result');
    };

    const onAdd = () => {
        console.log('result');
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Grid container spacing={4}>
                {values.map((value) => (
                    <Grid item xs={3} key={value.id}>
                        <Paper sx={styles.listContainer}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant='h6' color={'white'} sx={styles.headerPaper}>{ value.name }</Typography>
                                {value.id !== -1 && <IconButton aria-label="delete" size="large">
                                    <DeleteIcon fontSize={'small'} sx={{ color: 'white' }}/>
                                </IconButton>}
                            </Box>
                            <Droppable droppableId={`value-${value.id}`}>
                                {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                        {value.values.map((subValue, index) => (
                                            <Draggable key={subValue.id} draggableId={subValue.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <Paper ref={provided.innerRef} snapshot={snapshot} {...provided.draggableProps} {...provided.dragHandleProps} sx={styles.itemPaper}>
                                                        <Typography variant='p'>{ subValue.name }</Typography>
                                                    </Paper>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Paper>
                    </Grid>
                ))}
                <Grid item xs={3}>
                    <Button variant='contained' color='secondaryBlue' sx={styles.addButton}>Adicionar uma nova região</Button>
                </Grid>
            </Grid>
        </DragDropContext>
    );
};

export default DraggableManyLists;
