import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, IconButton, Paper, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { FixedSizeList } from 'react-window';

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
});

const DraggableManyLists = ({ values, onChange, name, ...props }) =>  {
    const theme = useTheme();
    const styles = createStyles(theme);

    const getHeight = () => {
        if(!window || !window.innerHeight) {
            return 500;
        }
        return (window?.innerHeight - 315);
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const valueSource = values.filter((value) => value.id === Number(result.source.droppableId))[0];
        const subValueSourceIndex = valueSource.values.findIndex((subValue) => subValue.id === Number(result.draggableId));
        const subValueSource = valueSource.values.splice(subValueSourceIndex, 1)[0];

        const valueDestination = values.filter((value) => value.id === Number(result.destination.droppableId))[0];
        valueDestination.values.splice(result.destination.index, 0, subValueSource);


        onChange({ target: { value: [...values], name } });
    };

    return (
        <Grid container spacing={4} {...props}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {values.map((value) => (
                    <Grid item xs={3} key={value.id}>
                        <Droppable droppableId={`${value.id}`} type={'DRAGGABLE_MANY_LISTS'}
                            renderClone={(provided, snapshot, rubric) => (
                                <Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                    <Paper sx={styles.itemPaper}>
                                        <Typography variant="p">{value.values[rubric.source.index].name}</Typography>
                                    </Paper>
                                </Box>
                            )}
                        >
                            {(provided) => (
                                <Paper sx={styles.listContainer} {...provided.droppableProps} ref={provided.innerRef}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant='h6' color={'white'} sx={styles.headerPaper}>{ value.name } ({ value.values.length })</Typography>
                                        {value.id > 0 && <IconButton aria-label="delete" size="large">
                                            <DeleteIcon fontSize={'small'} sx={{ color: 'white' }}/>
                                        </IconButton>}
                                    </Box>
                                    <FixedSizeList
                                        itemCount={value.values.length}
                                        height={getHeight()}
                                        itemSize={54}
                                        outerRef={provided.innerRef}
                                        itemData={value.values}
                                    >
                                        {({ data, index, style }) => (
                                            <Draggable key={`${data[index].id}`} draggableId={`${data[index].id}`} index={index}>
                                                {(provided) => (
                                                    <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} sx={style}>
                                                        <Paper sx={styles.itemPaper}>
                                                            <Typography variant="p">{data[index].name}</Typography>
                                                        </Paper>
                                                    </Box>
                                                )}
                                            </Draggable>
                                        )}
                                    </FixedSizeList>
                                </Paper>
                            )}
                        </Droppable>
                    </Grid>
                ))}
            </DragDropContext>
        </Grid>
    );
};

export default DraggableManyLists;
