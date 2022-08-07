import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

const styles = {
    select: {
        width: '100%'
    }
};

const SelectField = ({ register, title, getValue, ...props }) => {
    const [values, setValues] = useState(null);

    useEffect(() => {
        getValue().then(r => r.body).then(setValues);
    }, []);

    return (
        <React.Fragment>
            {values && <FormControl sx={styles.select} required>
                <InputLabel>{title}</InputLabel>
                <Select label={title} {...register} {...props}>
                    {Object.keys(values).map((key, index) => (
                        <MenuItem key={key+'_'+index} value={key} {...register}>
                            values[key]
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>}
            {!values && <CircularProgress />}
        </React.Fragment>
    );
};

export default SelectField;
