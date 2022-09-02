import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';
import { IMaskInput } from 'react-imask';
import useCNPJController from './useCNPJController';

const CNPJField = ({ name, register, ...other }) => {
    return (
        <TextField
            variant="outlined"
            size="small"
            {...other}
            {...register(name, {
                pattern: /(\([0-9]{2}\)[.]\([0-9]{3}\)[.]\([0-9]{3}\)[/]\([0-9]{4}\)[-]\([0-9]{2}\))/,
            })}
            InputProps={{
                inputComponent: CNPJMask,
            }}
        />
    );
};

// eslint-disable-next-line react/display-name
const CNPJMask = forwardRef((props, ref) => {
    const { name, onAccept, other, value } = useCNPJController(props);

    return (
        <IMaskInput
            {...other}
            name={name}
            mask={'00.000.000/0000-00'}
            value={value}
            inputRef={ref}
            onAccept={onAccept}
            overwrite
        />
    );
});

export default CNPJField;
