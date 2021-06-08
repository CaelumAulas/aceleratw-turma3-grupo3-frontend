import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Login } from './pages/Login';
import { CreateUser } from './pages/CreateUser';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route path="/cadastro-usuario">
          <CreateUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
