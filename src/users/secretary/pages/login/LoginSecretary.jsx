import React from 'react';
import BaseLoginPaper from '../../../../components/bases/login/BaseLoginPaper';
import HtmlHead from '../../../../components/HtmlHead';

const LoginSecretary = () => {
    return (
        <>
            <HtmlHead userType={'Secretaria'} subTitle={'Login'}/>
            <BaseLoginPaper
                title={'Seja bem-vindo a Área das Secretarias'}
                registerRoute={'../cadastro'}
                forgotPasswordRoute={'../esqueci-minha-senha'}
            />
        </>
    );
};

export default LoginSecretary;
