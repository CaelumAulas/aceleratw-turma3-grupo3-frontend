import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ToolBar } from './components/ToolBar';
import { Login } from './pages/Login';
import { UserForm } from './pages/UserForm';
import { VehicleForm } from './pages/VehicleForm';
import { BrandForm } from './pages/BrandForm';

function App() {
  return (
    <Router>
      <ToolBar />
      <Switch>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/cadastro-usuario">
          <UserForm />
        </Route>
        <Route path="/cadastro-veiculo">
          <VehicleForm />
        </Route>
        <Route path="/cadastro-marca">
          <BrandForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
