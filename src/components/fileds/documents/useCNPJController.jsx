import React from 'react';

const useCNPJController = ({ name, onChange, ...other }) => {
    const onAccept = (value) => {
        onChange({ target: { name: name, value: value } });
    };

    return { name, onAccept, other };
};

export default useCNPJController;
