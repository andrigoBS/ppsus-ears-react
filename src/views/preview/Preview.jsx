import React from "react";
import {Switch,Route} from "react-router-dom"
import RegisterTherapist from "./pages/RegisterTherapist";
import RegisterInstitution from "./pages/RegisterInstitution";
import RegisterReferralService from "./pages/RegisterReferralService";
import RegisterSecretary from "./pages/RegisterSecretary";


function Preview() {
    return (
        <div>
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
            </Switch>
        </div>
    );
}

export default Preview;
