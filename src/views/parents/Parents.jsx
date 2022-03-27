import React from "react";
import {Routes, Route} from "react-router-dom"
import TopBar from "../../components/TopBar";
import HomeParents from "./pages/HomeParents";
import LoginParents from "./pages/login/LoginParents";

const Parents = () => {
    return (
        <TopBar viewTitle={'Área dos Pais'} viewHome={'/pais'}>
            <Routes>
                <Route path={'/'} element={<HomeParents/>} />
                <Route path={'/login'} element={<LoginParents/>} />
            </Routes>
        </TopBar>
    );
}

export default Parents;
