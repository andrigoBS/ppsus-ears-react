import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react';

const styles = {
    select: {
        width: '100%',
    },
    multipleChipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        whiteSpace: 'normal',
        gap: 0.5
    },
    chipElement: {
        maxHeight: '23px'
    },
    OpenedOptionsContainer:  {
        maxHeight: '300px',
    },
};

const SelectField = ({ register, title, values, multiple, onChange, ...props }) => {
    const [value, setValue] = useState(props.value || props.defaultValue || register.value || (multiple? [] : ''));
    const createRenderMultiple = (selected) => {
        if (multiple) {
            return selected.map((selectedElement) => (
                <Chip key={'chip-select-'+selectedElement} sx={styles.chipElement}
                    label={values.filter(v => v.id === selectedElement)[0].name}
                />
            ));
        }

        return values.filter(v => v.id === selected)[0].name;
    };

    const handleOnchange = (event) => {
        if(multiple && typeof event.target.value === 'string') {
            event.target.value = event.target.value.split(',');
        }

        register.onChange(event);
        if(onChange) {
            onChange(event);
        }

        setValue(event.target.value);
    };

    const configValueManipulation = () => {
        return {
            ...register,
            value: value,
            onChange: handleOnchange,
        };
    };

    return (
        <FormControl sx={styles.select} size={'small'} {...props} {...configValueManipulation()} >
            <InputLabel> {title} </InputLabel>
            <Select
                {...configValueManipulation()}
                MenuProps={{
                    PaperProps: {
                        style: styles.OpenedOptionsContainer,
                    },
                }}
                input={<OutlinedInput label={title} />}
                multiple={multiple}
                renderValue={(selected) => (
                    <Box sx={styles.multipleChipContainer}>
                        {createRenderMultiple(selected)}
                    </Box>
                )}
            >
                {values.map((element, index) => (
                    <MenuItem key={element.id+'_'+index} value={element.id} {...register}>
                        {element.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectField;
