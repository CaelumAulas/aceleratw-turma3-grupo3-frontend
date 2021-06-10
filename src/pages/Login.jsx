import React, { useContext, useEffect, useState } from 'react';
import {
    TextField,
    Button,
    Container
} from '@material-ui/core';
import { useHistory } from 'react-router';

import { UserContext } from '../contexts/user';
import { MenuContext } from '../contexts/menu';

export function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const { handleLogin } = useContext(UserContext);
    const { handleChangeTitle } = useContext(MenuContext);
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        console.log(username);
        console.log(password);

        history.push('/dashboard');
        handleLogin();
    }

    useEffect(() => {
        handleChangeTitle("Login");
    }, [handleChangeTitle])

    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    id="username"
                    label="Usuário"
                    variant="outlined"
                    margin="normal"
                    onChange={(event) => setUsername(event.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    type="password"
                    id="password"
                    label="Senha"
                    variant="outlined"
                    margin="normal"
                    onChange={(event) => setPassword(event.target.value)}
                    fullWidth
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ marginTop: 20 }}
                    fullWidth
                >
                    Entrar
                </Button>
            </form>
        </Container>
    )
}