import React from "react";
import {Routes,Route} from "react-router-dom"
import RegisterTherapist from "./pages/RegisterTherapist";
import RegisterInstitution from "./pages/RegisterInstitution";
import RegisterReferralService from "./pages/RegisterReferralService";
import RegisterSecretary from "./pages/RegisterSecretary";
import Consultation from "./pages/Consultation/Consultation";
import TopBar from "../../components/TopBar";

function Parents() {
    return (
        <TopBar>
            <Routes>
                <Route path={'/registrarfono'} element={<RegisterTherapist/>} />
                <Route path={'/registrarinstituicao'} element={<RegisterInstitution/>} />
                <Route path={'/registrarservicoreferencia'} element={<RegisterReferralService/>} />
                <Route path={'/registrarsecretaria'} element={<RegisterSecretary/>} />
                <Route path={'/registrarconsulta'} element={<Consultation/>} />
            </Routes>
        </TopBar>
    );
}

export default Parents;
