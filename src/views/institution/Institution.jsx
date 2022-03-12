import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginInstitution from "./pages/login/LoginInstitution";
import RegisterInstitution from "./pages/login/RegisterInstitution";
import HomeInstitution from "./pages/HomeInstitution";
import TopBar from "../../components/TopBar";
import RegisterReferralService from "./pages/referralService/RegisterReferralService";

const Institution = () => {
    return (
        <TopBar>
            <Routes>
                <Route path={'/'} element={<HomeInstitution/>} />
                <Route path={'/login'} element={<LoginInstitution/>} />
                <Route path={'/cadastro'} element={<RegisterInstitution/>} />
                <Route path={'/sevico-referencia'} element={<RegisterReferralService/>} />
            </Routes>
        </TopBar>
    );
}

export default Institution;
