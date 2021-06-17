import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { UserContext, UserProvider } from './contexts/user';
import { MenuProvider } from './contexts/menu';
import { ToolBar } from './components/ToolBar';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { UserForm } from './pages/UserForm';
import { UserList } from './pages/UserList';
import { VehicleForm } from './pages/VehicleForm';
import { VehicleList } from './pages/VehicleList';
import { BrandForm } from './pages/BrandForm';
import { BrandList } from './pages/BrandList';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const { userIsLogged } = useContext(UserContext);

  return (
    <UserProvider>
      <MenuProvider>
        <Router>
          <ToolBar />
          <Switch>
            <Route exact path="/">
              {
                userIsLogged
                  ? <Redirect to="/dashboard" />
                  : <Redirect to="/sign-in" />
              }
            </Route>
            <Route path="/sign-in">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/cadastro-usuario">
              <UserForm />
            </Route>
            <Route path="/lista-usuarios">
              <UserList />
            </Route>
            <Route path="/cadastro-veiculo">
              <VehicleForm />
            </Route>
            <Route path="/editar-veiculo/:id">
              <VehicleForm />
            </Route>
            <Route path="/lista-veiculos">
              <VehicleList />
            </Route>
            <Route path="/cadastro-marca">
              <BrandForm />
            </Route>
            <Route path="/editar-marca/:id">
              <BrandForm />
            </Route>
            <Route path="/lista-marcas">
              <BrandList />
            </Route>
            <Route path="/**">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </MenuProvider>
    </UserProvider>
  );
}

export default App;
