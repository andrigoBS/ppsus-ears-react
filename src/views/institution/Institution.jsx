import React from "react";
import {Routes, Route} from "react-router-dom"
import RegisterInstitution from "./pages/login/RegisterInstitution";
import HomeInstitution from "./pages/HomeInstitution";
import TopBar from "../../components/TopBar";
import RegisterReferralService from "./pages/referralService/RegisterReferralService";
import {ViewConfigurationProvider} from "../../providers/viewConfiguration/ViewConfiguration";
import InstitutionService from "../../services/institution/InstitutionService";
import {AuthProvider, RedirectIfAuth, RequireAuth} from "../../providers/auth/Auth";
import PageNotFound from "../site/pages/PageNotFound";
import UserAvatarDropDown from "../../components/genericUser/UserAvatarDropDown";
import BaseLoginPaper from "../../components/bases/BaseLoginPaper";

const Institution = () => {
    return (
        <ViewConfigurationProvider service={InstitutionService} title={'Área Institucional'} baseRoute={'/institucional'} loginRoute={'/login'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={true}/>}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeInstitution/> </RequireAuth>} />
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper/> </RedirectIfAuth>} />
                        <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterInstitution/> </RedirectIfAuth>} />
                        <Route path={'/servico-referencia/cadastro'} element={<RequireAuth> <RegisterReferralService/> </RequireAuth>} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
}

export default Institution;
