import React from "react";
import {BrowserRouter,Route} from "react-router-dom"
import Admin from "./users/admin/Admin";
import Institution from "./users/institution/Institution";
import Researches from "./users/researches/Researches";
import Site from "./users/site/Site";
import Therapist from "./users/therapist/Therapist";

function App() {
  return (
      <BrowserRouter>
          <Route exact path={'/'}>
              <Site/>
          </Route>
          <Route path={'/admin'}>
              <Admin/>
          </Route>
          <Route path={'/institution'}>
              <Institution/>
          </Route>
          <Route path={'/researches'}>
              <Researches/>
          </Route>
          <Route path={'/therapist'}>
              <Therapist/>
          </Route>
      </BrowserRouter>
  );
}

export default App;
