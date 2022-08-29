import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import TopicListIcon from '../../lists/TopicListIcon';
import usePasswordController from './usePasswordController';

const PasswordField = ({ register, onChange, ...props }) => {
    const { value, handleOnChange, getColorIfIsValid, validate } = usePasswordController(register, onChange);

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
