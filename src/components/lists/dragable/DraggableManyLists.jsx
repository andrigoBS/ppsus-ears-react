import { CheckBox } from '@mui/icons-material';
import React from 'react';
import { Box, Grid, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { FixedSizeList } from 'react-window';

const createStyles = (theme) => ({
    listContainer: {
        backgroundColor: theme.palette.secondaryBlue.main,
        padding: '5px',
    },
    itemPaper: {
        border: 'solid',
        padding: '8px',
        margin: '10px'
    },
    headerPaper: {
        margin: '5px 10px'
    },
    headerPaperContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
});

const DraggableManyLists = ({ values, onDropSubValue, onDeleteValue, onEditValue, ...props }) =>  {
    const theme = useTheme();
    const styles = createStyles(theme);
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const getSubItemHeight = () => {
        if(isMobile || !window || !window.innerHeight) {
            return 300;
        }
        return (window.innerHeight - 315);
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const [valueSourceId, valueSourceIndex] = result.source.droppableId.split('-');
        const [subValueSourceId, subValueSourceIndex] = result.draggableId.split('-');
        const [valueDestinationId, valueDestinationIndex] = result.destination.droppableId.split('-');

        onDropSubValue({
            source: {
                valueIndex: Number(valueSourceIndex),
                subValueIndex: Number(subValueSourceIndex),
                valueId: Number(valueSourceId),
            },
            destination: {
                valueIndex: Number(valueDestinationIndex),
                subValueIndex: result.destination.index,
                valueId: Number(valueDestinationId),
            },
            subValueId: subValueSourceId
        });
    };

    return (
        <Grid container spacing={4} {...props} justifyContent={'center'}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {values.map((value, index) => (
                    <Grid item key={value.id} sx={{ width: '360px' }}>
                        <Droppable droppableId={`${value.id}-${index}`} type={'DRAGGABLE_MANY_LISTS'}
                            renderClone={(provided, snapshot, rubric) => (
                                <DraggableSubListItem name={value.values[rubric.source.index].name} provided={provided} snapshot={snapshot}/>
                            )}
                        >
                            {(provided) => (
                                <Paper sx={styles.listContainer} {...provided.droppableProps} ref={provided.innerRef}>
                                    <Box sx={styles.headerPaperContainer}>
                                        <Typography variant='h6' color={'white'} sx={styles.headerPaper}>{ value.name } ({ value.values.length })</Typography>
                                        {Boolean(value && value.id) > 0 &&
                                            <Box>
                                                {onEditValue &&
                                                    <IconButton aria-label="edit" size="large" onClick={(event) => onEditValue(index, event)}>
                                                        <EditIcon fontSize={'small'} sx={{ color: 'white' }}/>
                                                    </IconButton>
                                                }
                                                {onDeleteValue &&
                                                    <IconButton aria-label="delete" size="large" onClick={(event) => onDeleteValue(index, event)}>
                                                        <DeleteIcon fontSize={'small'} sx={{ color: 'white' }}/>
                                                    </IconButton>
                                                }
                                            </Box>
                                        }
                                    </Box>
                                    <FixedSizeList
                                        itemCount={value.values.length}
                                        height={getSubItemHeight()}
                                        itemSize={54}
                                        outerRef={provided.innerRef}
                                        itemData={value.values}
                                    >
                                        {({ data, index, style }) => (
                                            <Draggable key={`${data[index].id}`} draggableId={`${data[index].id}-${index}`} index={index}>
                                                {(provided, snapshot) => (
                                                    <DraggableSubListItem name={data[index].name} provided={provided} snapshot={snapshot} sx={style}/>
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

const DraggableSubListItem = ({ provided, snapshot, name, ...props }) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    const borderColor = snapshot.isDragging ? theme.palette.primary.light : theme.palette.background.default;

    return (
        <Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} {...props}>
            <Paper sx={{ ...styles.itemPaper, borderColor }}>
                <Typography variant="p">{name}</Typography>
            </Paper>
        </Box>
    );
};

export default DraggableManyLists;
