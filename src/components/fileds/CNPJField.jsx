import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';
import { IMaskInput } from 'react-imask';

const CNPJField = ({ register, name, ...other }) => {
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

CNPJField.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
};


// eslint-disable-next-line react/display-name
const CNPJMask = forwardRef((props, ref) => {
    const { onChange, name, ...other } = props;

    const onAccept = (value) => {
        onChange({ target: { name: name, value: value } });
    };

    return (
        <IMaskInput
            {...other}
            name={name}
            mask={'00.000.000/0000-00'}
            inputRef={ref}
            onAccept={onAccept}
            overwrite
        />
    );
});

export default CNPJField;
