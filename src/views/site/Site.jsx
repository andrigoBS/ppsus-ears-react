import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginSite from "./pages/login/LoginSite";

function Site() {
    return (
        <div>
            <p>Site</p>
            <Routes>
                <Route path={'/login'}>
                    <LoginSite/>
                </Route>
            </Routes>
        </div>
    );
}

export default Site;
