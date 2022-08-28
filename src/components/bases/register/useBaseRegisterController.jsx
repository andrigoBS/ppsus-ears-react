import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const useBaseRegisterController = (serviceFunction) => {
    const navigate = useNavigate();
    const configuration = useViewConfiguration();

    const onSubmit = (data) => {
        serviceFunction(data).then((response) => {
            if(response.isSuccess){
                navigate(configuration.baseRoute);
            }
        });
    };

    return { onSubmit };
};

export default useBaseRegisterController;
