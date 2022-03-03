import React from "react";
import {BrowserRouter, Routes as RoutesRouter, Route } from "react-router-dom"
import Secretary from "./secretary/Secretary";
import Institution from "./institution/Institution";
import Site from "./site/Site";
import Therapist from "./therapist/Therapist";
import Parents from "./parents/Parents";

function Routes() {
  return (
      <BrowserRouter>
          <RoutesRouter>
              <Route exact path={'/'} element={<Site/>} />
              <Route path={'/pais/*'} element={<Parents/>} />
              <Route path={'/secretaria/*'} element={<Secretary/>} />
              <Route path={'/instituicional/*'} element={<Institution/>} />
              <Route path={'/fono/*'} element={<Therapist/>} />
          </RoutesRouter>
      </BrowserRouter>
  );
}

export default Routes;
