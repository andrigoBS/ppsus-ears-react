import React, { useEffect } from 'react';

const useBaseEditController = (serviceGetFunction, serviceFunction, id, setValue) => {
    const onSubmit = (data) => {
        console.log(data);
        serviceFunction(id, data);
    };

    useEffect(() => {
        serviceGetFunction(id).then(({ body, isSuccess }) => {
            if(isSuccess) {
                Object.keys(body).forEach((key) => {
                    console.log(key, body[key]);
                    setValue(key, body[key], { shouldDirty: true, shouldTouch: true, shouldValidate: true });
                });
            }
        });
    }, [id, serviceGetFunction, setValue]);

    return { onSubmit };
};

export default useBaseEditController;
