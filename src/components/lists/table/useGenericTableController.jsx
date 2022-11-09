import React from 'react';

const useGenericTableController = () => {
    const formatterOfDate = (value) => {
        const date = new Date(value);
        return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    };

    const formatterOfYesOrNo = (value) => {
        console.log('Aqui', value);
        return value === 0 ? 'Não' : 'Sim';
    };

    const formatValue = (name, value) => {
        if(!name){
            return value;
        }

        const formattersStrategy = {
            'date': formatterOfDate,
            'yes-or-no': formatterOfYesOrNo
        };

        return formattersStrategy[name](value);
    };

    return { formatValue };
};

export default useGenericTableController;
