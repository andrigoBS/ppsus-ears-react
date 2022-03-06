import React from "react";
import {Routes, Route} from "react-router-dom"
import TopBar from "../../components/TopBar";
import HomeParents from "./pages/HomeParents";
import LoginParents from "./pages/login/LoginParents";

function Parents() {
    return (
        <TopBar>
            <Routes>
                <Route path={'/'} element={<HomeParents/>} />
                <Route path={'/login'} element={<LoginParents/>} />
            </Routes>
        </TopBar>
    );
}

export default Parents;
