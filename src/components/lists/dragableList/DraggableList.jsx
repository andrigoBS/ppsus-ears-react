import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { FixedSizeList } from 'react-window';

const createStyles = (theme) => ({
    listContainer: {
        backgroundColor: theme.palette.secondaryBlue.main,
        padding: '5px',
        margin: 0,
        width: '307px'
    },
    headerPaper: {
        margin: '0px 10px',
        alignSelf: 'center',
    },
    headerPaperContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    accordionSummary: {
        flexDirection: 'row-reverse',
        minHeight: '44px !important',
        padding: '0 0 0 5px',
        div: {
            margin: '0 !important',
            padding: '0 !important'
        },
    },
});

const DraggableList = ({ value, valueIndex, hasSomeDrag, isMarked, onMark, onEditValue, onDeleteValue  }) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const [marked, setMarked] = useState([]);

    const getSubItemHeight = () => {
        if(isMobile || !window || !window.innerHeight) {
            return 300;
        }
        return (window.innerHeight - 400);
    };

    const getMarkedNames = (index) => {
        const markedCopy = [...marked];

        if(!marked.includes(index)) {
            markedCopy.push(index);
        }

        return markedCopy.map((markedValue) => value.values[markedValue].name);
    };

    const onClickMark = (index) => {
        const markedCopy = [...marked, index];
        setMarked(markedCopy);
        onMark(valueIndex, markedCopy);
    };

    useEffect(() => {
        if(!isMarked) {
            setMarked([]);
        }
    }, [isMarked]);

    return (
        <Droppable droppableId={`${value.id}-${valueIndex}`} type={'DRAGGABLE_MANY_LISTS'}
            renderClone={(provided, snapshot, rubric) => {
                return (
                    <DraggableSubListItem
                        names={getMarkedNames(rubric.source.index)}
                        provided={provided}
                        snapshot={snapshot}
                    />
                );
            }}
        >
            {(provided) => (
                <Accordion sx={styles.listContainer} {...provided.droppableProps} ref={provided.innerRef} defaultExpanded={true}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon fontSize={'small'} sx={{ color: 'white' }}/>} sx={styles.accordionSummary}>
                        <Box sx={styles.headerPaperContainer}>
                            <Typography variant='subtitle1' color={'white'} sx={styles.headerPaper}>{ value.name } ({ value.values.length })</Typography>
                            {Boolean(value && value.id) > 0 &&
                                <Box>
                                    {onEditValue &&
                                        <IconButton aria-label="edit" size="large" onClick={(event) => onEditValue(valueIndex, event)}>
                                            <EditIcon fontSize={'small'} sx={{ color: 'white' }}/>
                                        </IconButton>
                                    }
                                    {onDeleteValue &&
                                        <IconButton aria-label="delete" size="large" onClick={(event) => onDeleteValue(valueIndex, event)}>
                                            <DeleteIcon fontSize={'small'} sx={{ color: 'white' }}/>
                                        </IconButton>
                                    }
                                </Box>
                            }
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                        <FixedSizeList
                            itemCount={value.values.length}
                            height={getSubItemHeight()}
                            itemSize={45}
                            outerRef={provided.innerRef}
                            itemData={value.values}
                        >
                            {({ data, index, style }) => (
                                <Draggable key={`${data[index].id}`} draggableId={`${data[index].id}-${index}`} index={index}>
                                    {(provided, snapshot) => {
                                        return !(hasSomeDrag && marked.includes(index)) && (
                                            <DraggableSubListItem
                                                names={[data[index].name]}
                                                provided={provided}
                                                snapshot={snapshot}
                                                sx={style}
                                                onClickMark={() => onClickMark(index)}
                                                isMarked={isMarked && marked.includes(index)}
                                            />
                                        );
                                    }}
                                </Draggable>
                            )}
                        </FixedSizeList>
                        {provided.placeholder}
                    </AccordionDetails>
                </Accordion>
            )}
        </Droppable>
    );
};

const DraggableSubListItem = ({ provided, snapshot, names, isMarked, onClickMark, ...props }) => {
    const theme = useTheme();
    const styles = {
        itemPaper: {
            border: 'solid',
            padding: '4px 8px',
            margin: '10px'
        }
    };

    const handleOnClick = (event) => {
        event.preventDefault();

        onClickMark();
    };

    const borderColor = snapshot.isDragging || isMarked? theme.palette.primary.light : theme.palette.background.default;

    return (
        <Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} {...props}>
            {names.map((name) => (
                <Paper sx={{ ...styles.itemPaper, borderColor }} onClick={handleOnClick} key={name}>
                    <Typography variant="body2">{name}</Typography>
                </Paper>
            ))}
            {provided.placeholder}
        </Box>
    );
};

export default DraggableList;
