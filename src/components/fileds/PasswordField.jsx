import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import TopicListIcon from '../lists/TopicListIcon';

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

const PasswordField = ({ register, onChange, ...props }) => {
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

    const getTopicsAndIcons = () => {
        return [
            {
                topic: 'Deve existir uma letra maíscula',
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasUpper(value))}/>
            },
            {
                topic: 'Deve existir pelo menos um número',
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasNumber(value))}/>
            },
            {
                topic: 'Deve existir pelo menos um simbolo especial',
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasSpecial(value))}/>
            },
            {
                topic: 'Deve ter no mínimo 6 digitos',
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasMoreSix(value))}/>
            },
        ];
    };

    return(
        <TextField label="Senha" variant="outlined" size="small"
            {...register('password', { validate })}
            {...props}
            type="password" onChange={handleOnChange}
            helperText={
                <TopicListIcon topicsAndIcons={getTopicsAndIcons()}/>
            } required
        />
    );
};
export default PasswordField;
