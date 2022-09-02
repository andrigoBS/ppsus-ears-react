import React from 'react';

const useCNPJController = ({ name, onChange, value, ...other }) => {
    const onAccept = (value) => {
        onChange({ target: { name: name, value: value } });
    };

    return { name, onAccept, other, value };
};

export default useCNPJController;
