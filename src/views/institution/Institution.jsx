import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginInstitution from "./pages/login/LoginInstitution";

function Institution() {
    return (
        <div>
            <p>Institution</p>
            <Routes>
                <Route path={'/institution/login'}>
                    <LoginInstitution/>
                </Route>
            </Routes>
        </div>
    );
}

export default Institution;
