import React from 'react';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import useSelectController from './useSelectController';
import useSelectStyles from './useSelectStyles';

const SelectField = ({ register, title, values, multiple, onChange, ...other }) => {
    const styles = useSelectStyles();
    const { configValueManipulation } = useSelectController(register, multiple, onChange, other);

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

    return (
        <FormControl sx={styles.select} size={'small'} {...other} {...configValueManipulation()} >
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
