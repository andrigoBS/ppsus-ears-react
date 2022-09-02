import React, { useEffect } from 'react';

const useBaseEditController = (serviceGetFunction, serviceFunction, id, setValue) => {
    const onSubmit = (data) => {
        console.log(data);
        serviceFunction(id, data);
    };

    useEffect(() => {
        serviceGetFunction(id).then(({ body }) => {
            Object.keys(body).forEach((key) => {
                setValue(key, body[key], { shouldDirty: true, shouldTouch: true, shouldValidate: true });
            });
        });
    }, []);

    return { onSubmit };
};

export default useBaseEditController;
