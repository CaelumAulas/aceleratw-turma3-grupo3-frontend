import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core';

export function ToolBar() {
    const [screenName, setScreenName] = useState("Carango Bom");
    const [loggedUser, setLoggedUser] = useState(false);
    const history = useHistory();

    function handleChangeMenuItem(title, route) {
        setScreenName(title);
        history.push(route);
    }

    useEffect(() => {
        //to-do (verificar se usuário está logado)
    }, []);

    return (
        <AppBar position="static" style={{ marginBottom: 30 }}>
            <Toolbar style={{ flex: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    {screenName}
                </Typography>
                <div>
                    {loggedUser &&
                        <>
                            <Button color="inherit" onClick={() => handleChangeMenuItem("Usuários", "/cadastro-usuario")}>Usuários</Button>
                            <Button color="inherit" onClick={() => handleChangeMenuItem("Marcas", "/cadastro-marca")}>Marcas</Button>
                        </>
                    }
                    <Button color="inherit" onClick={() => handleChangeMenuItem("Veículos", "/cadastro-veiculo")}>Veículos</Button>
                    <Button color="inherit" onClick={() => handleChangeMenuItem("Login", "/sign-in")}>Login</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}