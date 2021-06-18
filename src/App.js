import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import './App.css';

import { UserProvider } from './contexts/user';
import { MenuProvider } from './contexts/menu';

import PrivateRoute from './routes/PrivateRoute';
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

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});


function App() {
  return (
   <ThemeProvider theme={theme}>
    <UserProvider>
      <MenuProvider>
        <Router>
          <ToolBar />
          <Switch>
            <Route path="/sign-in" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/cadastro-usuario" component={UserForm} />
            <PrivateRoute path="/lista-usuarios" component={UserList} />
            <PrivateRoute path="/cadastro-veiculo" component={VehicleForm} />
            <PrivateRoute path="/editar-veiculo/:id" component={VehicleForm} />
            <Route path="/lista-veiculos" component={VehicleList} />
            <PrivateRoute path="/cadastro-marca" component={BrandForm} />
            <PrivateRoute path="/editar-marca/:id" component={BrandForm} />
            <PrivateRoute path="/lista-marcas" component={BrandList} />
            <Route path="/**" component={NotFoundPage} />
          </Switch>
        </Router>
      </MenuProvider>
    </UserProvider>
   </ThemeProvider>
  );
}

export default App;
