import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core';

import { UserContext } from '../contexts/user';
import { MenuContext } from '../contexts/menu';

export function ToolBar() {
    const history = useHistory();
    const { userIsLogged, handleLogout } = useContext(UserContext);
    const { title } = useContext(MenuContext);

    function handleChangeMenuItem(route) {
        if (route === '/sign-in' && userIsLogged) {
            handleLogout();
        }

        history.push(route);
    }

    return (
        <AppBar position="static" style={{ marginBottom: 30 }}>
            <Toolbar style={{ flex: 1, justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography variant="h6">
                        Carango Bom
                    </Typography>
                    <Typography variant="subtitle2" style={{ marginInline: 30 }}>
                        &gt;
                    </Typography>
                    <Typography variant="subtitle2">
                        {title}
                    </Typography>
                </div>
                <div>
                    {userIsLogged &&
                        <>
                            <Button color="inherit" onClick={() => handleChangeMenuItem("/dashboard")}>Dashboard</Button>
                            <Button color="inherit" onClick={() => handleChangeMenuItem("/lista-usuarios")}>Usuários</Button>
                            <Button color="inherit" onClick={() => handleChangeMenuItem("/lista-marcas")}>Marcas</Button>
                        </>
                    }
                    <Button color="inherit" onClick={() => handleChangeMenuItem("/lista-veiculos")}>Veículos</Button>
                    <Button
                        color="inherit"
                        onClick={() => handleChangeMenuItem("/sign-in")}
                    >
                        {userIsLogged ? "Logout" : "Login"}
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}