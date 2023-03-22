import React from 'react';
import HtmlHead from '../../HtmlHead';

const BasePasswordForgotten = ({ userTypeTitle }) => {
    return (
        <>
            <HtmlHead userType={userTypeTitle} subTitle={'Esqueci minha senha'} />
        </>
    );
};

export default BasePasswordForgotten;
