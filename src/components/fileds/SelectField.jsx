import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react';

const styles = {
    select: {
        width: '100%'
    },
    multipleChipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
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
    const createRenderMultiple = () => {
        if (multiple) {
            return {
                multiple,
                renderValue: (selected) => (
                    <Box sx={styles.multipleChipContainer}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} sx={styles.chipElement}/>
                        ))}
                    </Box>
                ),
            };
        }

        return {};
    };

    const handleOnchange = (event) => {
        register.onChange(event);
        if(onChange) {
            onChange(event);
        }
    };

    return (
        <FormControl sx={styles.select} size={'small'} {...register} {...props} onChange={handleOnchange} >
            <InputLabel> {title} </InputLabel>
            <Select
                {...register}
                onChange={handleOnchange}
                MenuProps={{
                    PaperProps: {
                        style: styles.OpenedOptionsContainer,
                    },
                }}
                input={<OutlinedInput label={title} />}
                {...createRenderMultiple()}
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
