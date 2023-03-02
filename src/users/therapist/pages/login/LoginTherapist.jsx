import React from 'react';
import BaseLoginPaper from '../../../../components/bases/login/BaseLoginPaper';
import HtmlHead from '../../../../components/HtmlHead';

const LoginTherapist = () => {
    return (
        <>
            <HtmlHead userType={'Fonoaudiólogo'} subTitle={'Login'}/>
            <BaseLoginPaper
                title={'Seja bem-vindo a Área do Fonoaudiólogo'}
                registerRoute={'../cadastro'}
                forgotPasswordRoute={'../esqueci-minha-senha'}
            />
        </>
    );
};

export default LoginTherapist;
