import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginTherapist from "./pages/login/LoginTherapist";

function Therapist() {
    return (
        <div>
            <p>Therapist</p>
            <Routes>
                <Route path={'/therapist/login'}>
                    <LoginTherapist/>
                </Route>
            </Routes>
        </div>
    );
}

export default Therapist;
