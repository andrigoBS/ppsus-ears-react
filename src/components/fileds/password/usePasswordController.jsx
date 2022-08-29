import React, { useState } from 'react';

const validate = {
    hasUpper: (value) => /[A-Z]/.test(value),
    hasNumber: (value) => /\d/.test(value),
    hasSpecial: (value) => /\p{P}/u.test(value) || /[$+=|]/.test(value),
    hasMoreSix: (value) => value.length >= 6,
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

    return { value, handleOnChange, getColorIfIsValid, validate };
};

export default usePasswordController;
