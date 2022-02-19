import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginResearches from "./pages/login/LoginResearches";

function Researches() {
    return (
        <div>
            <p>Researches</p>
            <Routes>
                <Route path={'/researches/login'}>
                    <LoginResearches/>
                </Route>
            </Routes>
        </div>
    );
}

export default Researches;
