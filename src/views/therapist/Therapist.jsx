import React from "react";
import {Switch,Route} from "react-router-dom"
import LoginTherapist from "./pages/login/LoginTherapist";

function Therapist() {
    return (
        <div>
            <p>Therapist</p>
            <Switch>
                <Route path={'/site/login'}>
                    <LoginTherapist/>
                </Route>
            </Switch>
        </div>
    );
}

export default Therapist;
