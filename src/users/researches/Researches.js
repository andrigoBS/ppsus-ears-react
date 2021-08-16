import React from "react";
import {Switch,Route} from "react-router-dom"
import LoginResearches from "./pages/login/LoginResearches";

function Researches() {
    return (
        <div>
            <p>Researches</p>
            <Switch>
                <Route path={'/researches/login'}>
                    <LoginResearches/>
                </Route>
            </Switch>
        </div>
    );
}

export default Researches;
