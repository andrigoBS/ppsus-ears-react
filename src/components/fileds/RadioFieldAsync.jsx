import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RadioField from './radio/RadioField';

const RadioFieldAsync = ({ getValue, watch, ...props }) => {
    const [values, setValues] = useState(getValue? null : []);

    useEffect(() => {
        if(getValue) {
            getValue().then(r => r.body).then(setValues);
        }
    }, [watch || undefined]);

    if(!values){
        return (<CircularProgress />);
    }

    return (
        <RadioField values={values} {...props}/>
    );
};

export default RadioFieldAsync;
