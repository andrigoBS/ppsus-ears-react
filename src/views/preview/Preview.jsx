import React from "react";
import {Switch,Route} from "react-router-dom"
import RegisterTherapist from "./pages/RegisterTherapist";
import RegisterInstitution from "./pages/RegisterInstitution";
import RegisterReferralService from "./pages/RegisterReferralService";
import RegisterSecretary from "./pages/RegisterSecretary";
import Consultation from "./pages/Consultation/Consultation";


function Preview() {
    return (
        <Switch>
            <Route path={'/preview/register-therapist'}>
                <RegisterTherapist/>
            </Route>
            <Route path={'/preview/register-institution'}>
                <RegisterInstitution/>
            </Route>
            <Route path={'/preview/register-referral-service'}>
                <RegisterReferralService/>
            </Route>
            <Route path={'/preview/register-secretary'}>
                <RegisterSecretary/>
            </Route>
            <Route path={'/preview/register-consultation'}>
                <Consultation/>
            </Route>
        </Switch>
    );
}

export default Preview;
