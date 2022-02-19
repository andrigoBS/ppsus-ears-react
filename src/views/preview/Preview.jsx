import React from "react";
import {Routes,Route} from "react-router-dom"
import RegisterTherapist from "./pages/RegisterTherapist";
import RegisterInstitution from "./pages/RegisterInstitution";
import RegisterReferralService from "./pages/RegisterReferralService";
import RegisterSecretary from "./pages/RegisterSecretary";
import Consultation from "./pages/Consultation/Consultation";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import icone from './pages/images/MEU1ALO_RGB_WHITE.png';


function Preview() {
    return (
        <div>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <img src={icone} alt="iconeWhite" width='120px'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path={'/registrarfono'} element={<RegisterTherapist/>} />
                <Route path={'/registrarinstituicao'} element={<RegisterInstitution/>} />
                <Route path={'/registrarservicoreferencia'} element={<RegisterReferralService/>} />
                <Route path={'/registrarsecretaria'} element={<RegisterSecretary/>} />
                <Route path={'/registrarconsulta'} element={<Consultation/>} />
            </Routes>
        </div>
    );
}

export default Preview;
