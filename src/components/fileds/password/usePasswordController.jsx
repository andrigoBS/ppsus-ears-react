import React, { useState } from 'react';

const validate = {
    hasMoreSix: (value) => value.length >= 6,
    hasNumber: (value) => /\d/.test(value),
    hasSpecial: (value) => /\p{P}/u.test(value) || /[$+=|]/.test(value),
    hasUpper: (value) => /[A-Z]/.test(value),
};

const getColorIfIsValid = (isValid) => {
    if(isValid) {
        return { color: 'secondary' };
    }
    return {};
};

const usePasswordController = (register, onChange) => {
    const [value, setValue] = useState('');

    const handleOnChange = (event) => {
        if(register && register.onChange){
            register.onChange(event);
        }
        if(onChange){
            onChange(event);
        }
        setValue(event.target.value);
    };

    return { getColorIfIsValid, handleOnChange, validate, value };
};

export default usePasswordController;
