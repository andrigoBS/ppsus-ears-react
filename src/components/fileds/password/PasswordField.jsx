import React from 'react';
import { TextField } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import TopicListIcon from '../../lists/TopicListIcon';
import usePasswordController from './usePasswordController';

const PasswordField = ({ onChange, register, ...props }) => {
    const { getColorIfIsValid, handleOnChange, validate, value } = usePasswordController(register, onChange);

    const getTopicsAndIcons = () => {
        return [
            {
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasUpper(value))}/>,
                topic: 'Deve existir uma letra maíscula'
            },
            {
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasNumber(value))}/>,
                topic: 'Deve existir pelo menos um número'
            },
            {
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasSpecial(value))}/>,
                topic: 'Deve existir pelo menos um simbolo especial'
            },
            {
                icon: <FavoriteTwoToneIcon {...getColorIfIsValid(validate.hasMoreSix(value))}/>,
                topic: 'Deve ter no mínimo 6 digitos'
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
