import React from "react";
import {Switch,Route} from "react-router-dom"
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
            <Switch>
                <Route path={'/previa/registrarfono'}>
                    <RegisterTherapist/>
                </Route>
                <Route path={'/previa/registrarinstituicao'}>
                    <RegisterInstitution/>
                </Route>
                <Route path={'/previa/registrarservicoreferencia'}>
                    <RegisterReferralService/>
                </Route>
                <Route path={'/previa/registrarsecretaria'}>
                    <RegisterSecretary/>
                </Route>
                <Route path={'/previa/registrarconsulta'}>
                    <Consultation/>
                </Route>
            </Switch>
        </div>
    );
}

export default Preview;
