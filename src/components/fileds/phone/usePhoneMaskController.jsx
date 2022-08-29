import React, { useState } from 'react';

const getMask = (value) => {
    const valueClear = value.replace(' ', '').replace('-', '').replace('(', '').replace(')', '');

    if (valueClear.substring(0, 4) === '0800') { return '0800 000 0000'; }
    if (valueClear.length < 11) { return '(0#) 0000-00000'; }
    return '(0#) 00000-0000';
};

const usePhoneMaskController = ({ onChange, name, ...other }) => {
    const [data, setData] = useState(other.value || other.defaultValue || '');

    const onAccept = (value) => {
        onChange({ target: { name: name, value: value } });
        setData(value);
    };

    return { data, onAccept, name, other, getMask };
};

export default usePhoneMaskController;
