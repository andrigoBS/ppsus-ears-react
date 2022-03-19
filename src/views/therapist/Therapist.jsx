import React from "react";
import {Routes, Route} from "react-router-dom"
import TopBar from "../../components/TopBar";
import HomeTherapist from "./pages/HomeTherapist";
import LoginTherapist from "./pages/login/LoginTherapist";
import RegisterTherapist from "./pages/login/RegisterTherapist";
import RegisterConsultation from "./pages/consultation/RegisterConsultation";

const Therapist = () => {
    return (
        <TopBar>
            <Routes>
                <Route path={'/'} element={<HomeTherapist/>} />
                <Route path={'/login'} element={<LoginTherapist/>} />
                <Route path={'/cadastro'} element={<RegisterTherapist/>} />
                <Route path={'/consulta'} element={<RegisterConsultation/>} />
            </Routes>
        </TopBar>
    );
}

export default Therapist;
