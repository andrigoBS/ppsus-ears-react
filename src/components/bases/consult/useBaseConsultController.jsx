import React, { useState } from 'react';
import { FileHelper } from '../../../helpers/FileHelper';

const useBaseConsultController = (serviceFunction, headers, title, fileName) => {
    const [rows, setRows] = useState([]);

    const onSubmit = (data) => {
        console.log('rows', rows);
        serviceFunction(data).then((response) => {
            if(response.isSuccess){
                setRows(response.body);
            }
        });
    };

    const onClickExportExcelButton = React.useCallback(() =>{
        FileHelper(headers).convertJsonToCsv(rows, 'Relatorio ' + fileName);
    }, [fileName, headers, rows]);

    return { onClickExportExcelButton, onSubmit, rows, setRows };
};

export default useBaseConsultController;
