import React from "react";
import {Routes, Route} from "react-router-dom"
import TopBar from "../../components/TopBar";
import HomeTherapist from "./pages/HomeTherapist";
import LoginTherapist from "./pages/login/LoginTherapist";
import RegisterTherapist from "./pages/login/RegisterTherapist";
import RegisterConsultation from "./pages/consultation/RegisterConsultation";
import {ViewConfigurationProvider} from "../../providers/viewConfiguration/ViewConfiguration";
import TherapistService from "../../services/therapist/TherapistService";
import {AuthProvider} from "../../providers/auth/Auth";
import PageNotFound from "../site/pages/PageNotFound";

const Therapist = () => {
    return (
        <ViewConfigurationProvider service={TherapistService} title={'Área do Fonoaudiólogo'} baseRoute={'/fono'} loginRoute={'/login'}>
            {/*<AuthProvider>*/}
                <TopBar>
                    <Routes>
                        <Route path={'/'} element={<HomeTherapist/>} />
                        <Route path={'/login'} element={<LoginTherapist/>} />
                        <Route path={'/cadastro'} element={<RegisterTherapist/>} />
                        <Route path={'/consulta/cadastro'} element={<RegisterConsultation/>} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            {/*</AuthProvider>*/}
        </ViewConfigurationProvider>
    );
}

export default Therapist;
