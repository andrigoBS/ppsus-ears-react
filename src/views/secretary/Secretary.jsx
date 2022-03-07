import React from "react";
import {Routes, Route} from "react-router-dom"
import TopBar from "../../components/TopBar";
import RegisterSecretary from "./pages/login/RegisterSecretary";
import LoginSecretary from "./pages/login/LoginSecretary";
import HomeSecretary from "./pages/HomeSecretary";

function Secretary() {
    return (
        <TopBar>
            <Routes>
                <Route path={'/'} element={<HomeSecretary/>} />
                <Route path={'/login'} element={<LoginSecretary/>} />
                <Route path={'/cadastro'} element={<RegisterSecretary/>} />
            </Routes>
        </TopBar>
    );
}

export default Secretary;
