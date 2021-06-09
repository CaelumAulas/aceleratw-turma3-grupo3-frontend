import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Login } from './pages/Login';
import { UserForm } from './pages/UserForm';
import { VehicleForm } from './pages/VehicleForm';
import { VehicleList } from './pages/VehicleList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route path="/cadastro-usuario">
          <UserForm />
        </Route>
        <Route path="/cadastro-veiculo">
          <VehicleForm />
        </Route>
        <Route path="/lista-veiculos">
          <VehicleList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
