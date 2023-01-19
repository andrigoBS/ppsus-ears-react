import React, { useState } from 'react';
import { FileHelper } from '../../../helpers/FileHelper';

const useBaseConsultController = (serviceFunction, headers) => {
    const [rows, setRows] = useState();

    const onSubmit = (data) => {
        serviceFunction(data).then((response) => {
            if(response.isSuccess){
                setRows(response.body);
            }
        });
    };

    const onClickExportExcelButton = React.useCallback(() =>{
        FileHelper(headers).convertJsonToCsv(rows,'Relatorio Triagem');
    }, [headers, rows]);

    return { onClickExportExcelButton, onSubmit, rows, setRows };
};

export default useBaseConsultController;
