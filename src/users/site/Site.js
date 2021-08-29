import React from "react";
import {Switch,Route} from "react-router-dom"
import LoginSite from "./pages/login/LoginSite";

function Site() {
    return (
        <div>
            <p>Siteeee</p>
            <Switch>
                <Route path={'/site/login'}>
                    <LoginSite/>
                </Route>
            </Switch>
        </div>
    );
}

export default Site;
