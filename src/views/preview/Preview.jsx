import React from "react";
import {Switch,Route} from "react-router-dom"
import RegisterTherapist from "./pages/RegisterTherapist";
import RegisterInstitution from "./pages/RegisterInstitution";
import RegisterReferralService from "./pages/RegisterReferralService";
import RegisterSecretary from "./pages/RegisterSecretary";
import Consultation from "./pages/Consultation/Consultation";

function Preview() {
    return (
        <div>
            <Switch>
                <Route path={'/previa/registrarfono'}>
                    <RegisterTherapist/>
                </Route>
                <Route path={'/previa/registrarinstituicao'}>
                    <RegisterInstitution/>
                </Route>
                <Route path={'/previa/registrarservicoreferencia'}>
                    <RegisterReferralService/>
                </Route>
                <Route path={'/previa/registrarsecretaria'}>
                    <RegisterSecretary/>
                </Route>
                <Route path={'/previa/registrarconsulta'}>
                    <Consultation/>
                </Route>
            </Switch>
        </div>
    );
}

export default Preview;
