import React, { useEffect, useState } from 'react';
import { useGenericLogger } from '../../providers/genericLogger/GenericLogger';

const AsyncRequest = ({ children, loaderChildren, onError, requestFunction }) => {
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(false);
    const logger = useGenericLogger();

    useEffect(() => {
        if(requestFunction) {
            if(!loading) {
                setLoading(true);
                requestFunction().then(logger.genericLog).then(response => {
                    if(response && response.isSuccess) {
                        setValues(response.body);
                    }else {
                        if (onError) {
                            onError(response);
                        }
                    }
                    setLoading(false);
                });
            }
        }
    }, [requestFunction]);

    if(loaderChildren && loading){
        return loaderChildren;
    }

    return children(values);
};

export default AsyncRequest;
