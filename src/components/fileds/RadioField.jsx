import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';

const styles = {
    select: {
        width: '100%'
    }
};

const RadioField = ({ register, title, values, ...props }) => {
    return (
        <React.Fragment>
            {title && <Typography variant={'h6'}>
                {title}
            </Typography>}
            <FormControl
                sx={styles.select}
                size={'small'}
                {...props}
            >
                <RadioGroup
                    defaultValue={values[0].id}
                    {...register}
                >
                    {values.map((element, index) => (
                        <FormControlLabel
                            key={element.id+'_'+index}
                            value={element.id}
                            control={<Radio/>}
                            label={element.name}
                            {...register}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );
};

export default RadioField;
