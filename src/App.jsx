import React from "react";
import {BrowserRouter,Route} from "react-router-dom"
import Admin from "./views/admin/Admin";
import Institution from "./views/institution/Institution";
import Researches from "./views/researches/Researches";
import Site from "./views/site/Site";
import Therapist from "./views/therapist/Therapist";

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
