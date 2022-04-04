import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginInstitution from "./pages/login/LoginInstitution";
import RegisterInstitution from "./pages/login/RegisterInstitution";
import HomeInstitution from "./pages/HomeInstitution";
import TopBar from "../../components/TopBar";
import RegisterReferralService from "./pages/referralService/RegisterReferralService";
import {ViewConfigurationProvider} from "../../providers/viewConfiguration/ViewConfiguration";
import InstitutionService from "../../services/institution/InstitutionService";
import {AuthProvider} from "../../providers/auth/Auth";

const Institution = () => {
    return (
        <ViewConfigurationProvider service={InstitutionService} title={'Área Institucional'} baseRoute={'/institucional'} loginRoute={'/login'}>
            {/*<AuthProvider>*/}
                <TopBar>
                    <Routes>
                        <Route path={'/'} element={<HomeInstitution/>} />
                        <Route path={'/login'} element={<LoginInstitution/>} />
                        <Route path={'/cadastro'} element={<RegisterInstitution/>} />
                        <Route path={'/servico-referencia/cadastro'} element={<RegisterReferralService/>} />
                    </Routes>
                </TopBar>
            {/*</AuthProvider>*/}
        </ViewConfigurationProvider>
    );
}

export default Institution;
