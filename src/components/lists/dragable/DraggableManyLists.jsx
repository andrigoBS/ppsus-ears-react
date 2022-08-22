import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Badge, Box, Grid, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
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

    const [marked, setMarked] = useState({ valueId: null, subValues: [] });
    const [hasSomeDrag, setHasSomeDrag] = useState(false);

    const getSubItemHeight = () => {
        if(isMobile || !window || !window.innerHeight) {
            return 300;
        }
        return (window.innerHeight - 315);
    };

    const getMarkedNames = (valueIndex, subValueIndex) => {
        if(values[valueIndex].id !== marked.valueId){
            return [values[valueIndex].values[subValueIndex].name];
        }

        const names = marked.subValues.map((subValue) => values[valueIndex].values.find((subValueFilter) => subValueFilter.id === subValue).name);

        if(!names.includes(values[valueIndex].values[subValueIndex].name)){
            names.push(values[valueIndex].values[subValueIndex].name);
        }

        return names;
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        let [valueSourceId, valueSourceIndex] = result.source.droppableId.split('-');
        let [subValueSourceId, subValueSourceIndex] = result.draggableId.split('-');
        const [valueDestinationId, valueDestinationIndex] = result.destination.droppableId.split('-');

        valueSourceId = Number(valueSourceId);
        valueSourceIndex = Number(valueSourceIndex);
        subValueSourceId = Number(subValueSourceId);
        subValueSourceIndex = Number(subValueSourceIndex);

        const subValueIndexes = [];
        const subValueIds = [];

        if(marked.valueId === valueSourceId){
            marked.subValues.forEach((subValue) => {
                const index = values[valueSourceIndex].values.findIndex((subValueFilter) => subValueFilter.id === subValue);
                subValueIndexes.splice(index, 0, index);
                subValueIds.splice(index, 0, subValue);
            });
        }

        if(!subValueIds.includes(subValueSourceId)) {
            subValueIndexes.splice(subValueSourceIndex, 0, subValueSourceIndex);
            subValueIds.splice(subValueSourceIndex, 0, subValueSourceId);
        }

        onDropSubValue({
            source: {
                valueIndex: Number(valueSourceIndex),
                valueId: Number(valueSourceId),
                subValueIndexes: subValueIndexes,
            },
            destination: {
                valueIndex: Number(valueDestinationIndex),
                valueId: Number(valueDestinationId),
                subValueIndex: result.destination.index,
            },
            subValueIds: subValueIds
        });

        setHasSomeDrag(false);
        onClickMarkCity(null, null);
    };

    const handleOnDragStart = (result) => {
        const valueSourceId = Number(result.source.droppableId.split('-')[0]);
        if(marked.valueId !== null && valueSourceId !== marked.valueId){
            onClickMarkCity(null, null);
        }
        setHasSomeDrag(true);
    };

    const onClickMarkCity = (clickedValueId, clickedSubValueId) => {
        if(marked.valueId === null || marked.valueId !== clickedValueId) {
            marked.valueId = clickedValueId;
            marked.subValues = [];
        }

        if(clickedSubValueId){
            const subValueIndex = marked.subValues.indexOf(clickedSubValueId);

            if(subValueIndex && subValueIndex >= 0){
                marked.subValues.splice(subValueIndex, 1);
            }else{
                marked.subValues.push(clickedSubValueId);
            }
        }

        setMarked({ ...marked });
    };

    useEffect(() => {
        window.addEventListener('click', (event) => {
            if(event.defaultPrevented){
                return;
            }

            onClickMarkCity(null, null);
        });
    }, []);

    return (
        <Grid container spacing={4} {...props} justifyContent={'center'}>
            <DragDropContext onDragEnd={handleOnDragEnd} onBeforeDragStart={handleOnDragStart}>
                {values.map((value, index) => (
                    <Grid item key={value.id} sx={{ width: '360px' }}>
                        <Droppable droppableId={`${value.id}-${index}`} type={'DRAGGABLE_MANY_LISTS'}
                            renderClone={(provided, snapshot, rubric) => {
                                return (
                                    <DraggableSubListItem
                                        names={getMarkedNames(index, rubric.source.index)}
                                        provided={provided}
                                        snapshot={snapshot}
                                        badgeContent={marked.subValues.length > 1? marked.subValues.length: null}
                                    />
                                );
                            }}
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
                                                {(provided, snapshot) => {
                                                    const isMarked = value.id === marked.valueId && marked.subValues.includes(data[index].id);
                                                    return !(hasSomeDrag && isMarked) && (
                                                        <DraggableSubListItem
                                                            names={[data[index].name]}
                                                            provided={provided}
                                                            snapshot={snapshot}
                                                            sx={style}
                                                            onClickMark={() => onClickMarkCity(value.id, data[index].id)}
                                                            isMarked={isMarked}
                                                        />
                                                    );
                                                }}
                                            </Draggable>
                                        )}
                                    </FixedSizeList>
                                    {provided.placeholder}
                                </Paper>
                            )}
                        </Droppable>
                    </Grid>
                ))}
            </DragDropContext>
        </Grid>
    );
};

const DraggableSubListItem = ({ provided, snapshot, names, isMarked, onClickMark, ...props }) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    const handleOnClick = (event) => {
        event.preventDefault();

        onClickMark();
    };

    const borderColor = snapshot.isDragging || isMarked? theme.palette.primary.light : theme.palette.background.default;

    return (
        <Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} {...props}>
            {names.map((name) => (
                <Paper sx={{ ...styles.itemPaper, borderColor }} onClick={handleOnClick} key={name}>
                    <Typography variant="p">{name}</Typography>
                </Paper>
            ))}
            {provided.placeholder}
        </Box>
    );
};

export default DraggableManyLists;
