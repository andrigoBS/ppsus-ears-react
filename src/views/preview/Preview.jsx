import React from "react";
import {Switch,Route} from "react-router-dom"
import RegisterTherapist from "./pages/RegisterTherapist";


function Preview() {
    return (
        <div>
            <p>Site</p>
            <Switch>
                <Route path={'/preview/register-therapist'}>
                    <RegisterTherapist/>
                </Route>
            </Switch>
        </div>
    );
}

export default Preview;
