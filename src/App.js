import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from './pages/Home';
import { CreateUser } from './pages/CreateUser';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cadastro-usuario">
          <CreateUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
