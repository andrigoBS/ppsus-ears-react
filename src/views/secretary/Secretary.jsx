import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginSecretary from "./pages/login/LoginSecretary";

function Secretary() {
    return (
        <div>
            <p>Admin</p>
            <Routes>
                <Route path={'/login'}>
                    <LoginSecretary/>
                </Route>
            </Routes>
        </div>
    );
}

export default Secretary;
