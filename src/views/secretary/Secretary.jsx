import React from "react";
import {Routes, Route} from "react-router-dom"
import TopBar from "../../components/TopBar";
import RegisterSecretary from "./pages/login/RegisterSecretary";
import LoginSecretary from "./pages/login/LoginSecretary";
import HomeSecretary from "./pages/HomeSecretary";
import {ViewConfigurationProvider} from "../../providers/viewConfiguration/ViewConfiguration";
import SecretaryService from "../../services/secretary/SecretaryService";
import {AuthProvider} from "../../providers/auth/Auth";
import PageNotFound from "../site/pages/PageNotFound";

const Secretary = () => {
    return (
        <ViewConfigurationProvider service={SecretaryService} title={'Área da Secretaria'} baseRoute={'/secretaria'} loginRoute={'/login'}>
            {/*<AuthProvider>*/}
                <TopBar>
                    <Routes>
                        <Route path={'/'} element={<HomeSecretary/>} />
                        <Route path={'/login'} element={<LoginSecretary/>} />
                        <Route path={'/cadastro'} element={<RegisterSecretary/>} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            {/*</AuthProvider>*/}
        </ViewConfigurationProvider>
    );
}

export default Secretary;
