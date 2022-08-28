import React, { useState } from 'react';

const useBaseConsultController = (serviceFunction) => {
    const [rows, setRows] = useState();

    const onSubmit = (data) => {
        serviceFunction(data).then((response) => {
            if(response.isSuccess){
                setRows(response.body);
            }
        });
    };

    return { rows, setRows, onSubmit };
};

export default useBaseConsultController;
