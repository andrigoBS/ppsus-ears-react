import React from "react";
import {Switch,Route} from "react-router-dom"
import LoginInstitution from "./pages/login/LoginInstitution";

function Institution() {
    return (
        <div>
            <p>Institution</p>
            <Switch>
                <Route path={'/institution/login'}>
                    <LoginInstitution/>
                </Route>
            </Switch>
        </div>
    );
}

export default Institution;
