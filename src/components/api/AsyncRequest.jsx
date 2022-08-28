import React, { useEffect, useState } from 'react';

const AsyncRequest = ({ children, loaderChildren, requestFunction, watch, onError }) => {
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
    }, [watch || undefined]);

    if(!values){
        return loaderChildren;
    }

    return children(values);
};

export default AsyncRequest;
