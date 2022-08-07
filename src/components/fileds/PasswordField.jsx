import { TextField } from '@mui/material';
import React from 'react';

const PasswordMessages = () => {
    return(
        <React.Fragment>
            <p>Deve existir uma letra maíscula</p>
            <p>Deve existir pelo menos um número</p>
            <p>Deve existir pelo menos um simbolo especial</p>
            <p>Deve ter no mínimo 6 digitos</p>
        </React.Fragment>
    );
};

const PasswordField = ({ register }) => {
    return(
        <TextField  {...register('password')} label="Senha" type="password" variant="outlined" size="small"
            helperText={<PasswordMessages/>} required/>
    );
};
export default PasswordField;