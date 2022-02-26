import React from "react";
import {BrowserRouter, Routes as RoutesRouter, Route, Navigate } from "react-router-dom"
import Secretary from "./views/secretary/Secretary";
import Institution from "./views/institution/Institution";
import Researches from "./views/researches/Researches";
import Site from "./views/site/Site";
import Therapist from "./views/therapist/Therapist";
import Preview from "./views/preview/Preview";

function Routes() {
  return (
      <BrowserRouter>
          <RoutesRouter>
              <Route exact path={'/'} element={<Site/>} />
              <Route path={'/secretaria/*'} element={<Secretary/>} />
              <Route path={'/instituicional/*'} element={<Institution/>} />
              <Route path={'/pesquisa/*'} element={<Researches/>} />
              <Route path={'/fono/*'} element={<Therapist/>} />
              <Route path={'/previa/*'} element={<Preview />} />
          </RoutesRouter>
      </BrowserRouter>
  );
}

export default Routes;
