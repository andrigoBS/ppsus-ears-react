import React from 'react';
import BaseLoginPaper from '../../../../components/bases/login/BaseLoginPaper';
import HtmlHead from '../../../../components/HtmlHead';

const LoginParents = () => {
    return (
        <>
            <HtmlHead userType={'Pais'} subTitle={'Login'}/>
            <BaseLoginPaper
                title={'Seja bem-vindo a Área dos Pais'}
                forgotPasswordRoute={'../esqueci-minha-senha'}
            />
        </>
    );
};

export default LoginParents;
