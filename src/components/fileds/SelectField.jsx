import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

const styles = {
    select: {
        width: '100%'
    }
};

const SelectField = ({ register, title, getValue, watch, ...props }) => {
    const [values, setValues] = useState(getValue? null : {});

    useEffect(() => {
        if(getValue) {
            getValue().then(r => r.body).then(setValues);
        }
    }, [watch]);

    return (
        <React.Fragment>
            {values && <FormControl sx={styles.select} required>
                <InputLabel size={'small'}>{title}</InputLabel>
                <Select label={title} {...register} {...props} size={'small'}>
                    {Object.keys(values).map((key, index) => (
                        <MenuItem key={key+'_'+index} value={key} {...register}>
                            {values[key]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>}
            {!values && <CircularProgress />}
        </React.Fragment>
    );
};

export default SelectField;
