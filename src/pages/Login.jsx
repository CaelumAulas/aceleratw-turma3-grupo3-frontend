import React, { useState } from 'react';

import {
    Grid,
    Typography,
    TextField,
    Button
} from '@material-ui/core';

export function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(event) {
        event.preventDefault();

        console.log(username);
        console.log(password);
    }

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
        >

            <Grid item xl={3}>
                <Typography variant="h5" component="h1" align="center">
                    Login
                    </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        id="username"
                        label="Usuário"
                        variant="outlined"
                        margin="normal"
                        onChange={(event) => setUsername(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="password"
                        id="password"
                        label="Senha"
                        variant="outlined"
                        margin="normal"
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                    >
                        Entrar
                        </Button>
                </form>
            </Grid>
        </Grid>
    )
}