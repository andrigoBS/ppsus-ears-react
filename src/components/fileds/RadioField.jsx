import { CircularProgress, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const RadioField = ({ register, title, getValue, ...props }) => {
    const [values, setValues] = useState(null);

    useEffect(() => {
        getValue().then(r => r.body).then(setValues);
    }, []);

    return (
        <React.Fragment>
            {title && <Typography variant={'h6'}>
                {title}
            </Typography>}
            {values && <FormControl required>
                <RadioGroup {...register} defaultValue={Object.keys(values)[0]} {...props}>
                    {Object.keys(values).map((key, index) => (
                        <FormControlLabel key={key+'_'+index} value={key} control={<Radio/>} label={values[key]} {...register}/>
                    ))}
                </RadioGroup>
            </FormControl>}
            {!values && <CircularProgress />}
        </React.Fragment>
    );
};

export default RadioField;
