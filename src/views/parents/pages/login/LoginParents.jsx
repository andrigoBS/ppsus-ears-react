import React from "react";
import BaseLoginPaper from "../../../../components/bases/BaseLoginPaper";
import ParentsService from "../../../../services/parents/ParentsService";

const LoginParents = () => {
    return (
        <BaseLoginPaper title={'Área dos Pais'} loginServiceFunction={ParentsService.login}/>
    );
}

export default LoginParents;


