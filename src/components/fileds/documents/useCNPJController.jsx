import React from 'react';

const useCNPJController = ({ onChange, name, value, ...other }) => {
    const onAccept = (value) => {
        onChange({ target: { name: name, value: value } });
    };

    return { name, value, onAccept, other };
};

export default useCNPJController;
