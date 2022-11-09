import React, { useEffect, useState } from 'react';

const AsyncRequest = ({ children, loaderChildren, onError, requestFunction, watch }) => {
    const [values, setValues] = useState(loaderChildren? null : []);

    useEffect(() => {
        if(requestFunction) {
            requestFunction().then(response => {
                if(response.isSuccess) {
                    setValues(response.body);
                }else if(onError){
                    onError(response);
                }
            });
        }
    }, [watch, requestFunction, onError]);

    if(!values){
        return loaderChildren;
    }

    return children(values);
};

export default AsyncRequest;
