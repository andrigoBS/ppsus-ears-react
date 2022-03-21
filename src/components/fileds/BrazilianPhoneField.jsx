import React, {useState} from "react";
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import TextField from "@mui/material/TextField";

const BrazilianPhoneField = ({register, name, formErrors, required, label, ...other}) => {
    return (
        <PhoneFieldMasked
            variant="outlined"
            size="small"
            label={label}
            {...other}
            error={formErrors[name]}
            required={required}
            {...register(name, {
                required: required,
                pattern: /(\([1-9]{2}\) 9?[0-9]{4}-[0-9]{4})|(0800 [0-9]{3} [0-9]{4})/,
            })}
        />
    );
}

BrazilianPhoneField.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    formErrors: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
};

const PhoneFieldMasked = ({onChange, value, ...other}) => {
    let [data, setData] = useState(value || '');

    const handleOnChange = (event) => {
        setData(event.target.value);
        onChange(event);
    }

    return (
        <TextField
            {...other}
            onChange={handleOnChange}
            value={data}
            InputProps={{
                inputComponent: PhoneMask,
            }}
        />
    );
}

const PhoneMask = React.forwardRef(function (props, ref) {
    const { onChange, name, ...other } = props;
    let [mask, setMask] = useState("(0#) 00000-0000");

    const onAccept = (value) => {
        setMask(getMask(value));
        onChange({target: {name: name, value: value}});
    }

    return (
        <IMaskInput
            {...other}
            mask={mask}
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={onAccept}
            overwrite
        />
    );
});
PhoneMask.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const getMask = (value) => {
    let valueClear = value.replace(' ', '').replace('-', '').replace('(', '').replace(')', '');

    if (valueClear.substring(0, 4) === '0800') return "0800 000 0000";
    if (valueClear.length < 11) return "(0#) 0000-00000";
    return "(0#) 00000-0000";
}

export default BrazilianPhoneField;