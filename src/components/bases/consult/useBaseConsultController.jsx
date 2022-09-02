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

    return { onSubmit, rows, setRows };
};

export default useBaseConsultController;
