import React from "react";
import {Routes, Route} from "react-router-dom";
import TopBar from "../../components/TopBar";
import HomeTherapist from "./pages/HomeTherapist";
import RegisterTherapist from "./pages/login/RegisterTherapist";
import RegisterConsultation from "./pages/consultation/RegisterConsultation";
import {ViewConfigurationProvider} from "../../providers/viewConfiguration/ViewConfiguration";
import TherapistService from "../../services/therapist/TherapistService";
import {AuthProvider, RedirectIfAuth, RequireAuth} from "../../providers/auth/Auth";
import PageNotFound from "../site/pages/PageNotFound";
import UserAvatarDropDown from "../../components/genericUser/UserAvatarDropDown";
import BaseLoginPaper from "../../components/bases/BaseLoginPaper";

const Therapist = () => {
    return (
        <ViewConfigurationProvider service={TherapistService} title={'Área do Fonoaudiólogo'} baseRoute={'/fono'} loginRoute={'/login'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={true}/>}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeTherapist/> </RequireAuth>} />
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper/> </RedirectIfAuth>} />
                        <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterTherapist/> </RedirectIfAuth>} />
                        <Route path={'/consulta/cadastro'} element={<RequireAuth> <RegisterConsultation/> </RequireAuth>} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Therapist;
