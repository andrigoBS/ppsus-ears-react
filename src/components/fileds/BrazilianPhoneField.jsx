import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';
import { IMaskInput } from 'react-imask';

const BrazilianPhoneField = ({ register, name, ...other }) => {
    return (
        <TextField
            variant="outlined"
            size="small"
            {...other}
            {...register(name, {
                pattern: /(\([1-9]{2}\) 9?[0-9]{4}-[0-9]{4})|(0800 [0-9]{3} [0-9]{4})/,
            })}
            InputProps={{
                inputComponent: PhoneMask,
            }}
        />
    );
};

BrazilianPhoneField.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
};


// eslint-disable-next-line react/display-name
const PhoneMask = forwardRef((props, ref) => {
    const { onChange, name, ...other } = props;
    const [data, setData] = useState(other.value || other.defaultValue || '');

    const onAccept = (value) => {
        onChange({ target: { name: name, value: value } });
        setData(value);
    };

    return (
        <IMaskInput
            {...other}
            name={name}
            mask={getMask(data)}
            value={data}
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={onAccept}
            overwrite
        />
    );
});

const getMask = (value) => {
    const valueClear = value.replace(' ', '').replace('-', '').replace('(', '').replace(')', '');

    if (valueClear.substring(0, 4) === '0800') { return '0800 000 0000'; }
    if (valueClear.length < 11) { return '(0#) 0000-00000'; }
    return '(0#) 00000-0000';
};

export default BrazilianPhoneField;
