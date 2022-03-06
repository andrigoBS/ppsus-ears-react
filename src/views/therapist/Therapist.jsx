import React from "react";
import {Routes, Route} from "react-router-dom"
import TopBar from "../../components/TopBar";
import HomeTherapist from "./pages/HomeTherapist";
import LoginTherapist from "./pages/login/LoginTherapist";
import RegisterTherapist from "./pages/login/RegisterTherapist";
import RegisterConsultation from "./pages/Consultation/RegisterConsultation";

function Therapist() {
    return (
        <TopBar>
            <p>Therapist</p>
            <Routes>
                <Route path={'/'} element={<HomeTherapist/>} />
                <Route path={'/login'} element={<LoginTherapist/>} />
                <Route path={'/register'} element={<RegisterTherapist/>} />
                <Route path={'/consulta'} element={<RegisterConsultation/>} />
            </Routes>
        </TopBar>
    );
}

export default Therapist;
