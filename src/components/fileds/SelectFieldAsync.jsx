import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SelectField from './SelectField';

const SelectFieldAsync = ({ getValue, watch, ...props }) => {
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
        <SelectField values={values} {...props}/>
    );
};

export default SelectFieldAsync;
