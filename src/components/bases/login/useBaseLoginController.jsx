import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../providers/auth/Auth';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const useBaseLoginController = () => {
    const { register, handleSubmit } = useForm();
    const auth = useAuth();
    const configuration = useViewConfiguration();

    const onSubmit = (data, event) => {
        event.preventDefault();
        auth.login(data.login, data.password);
    };

    return { register, handleSubmit, configuration, onSubmit };
};

export default useBaseLoginController;
