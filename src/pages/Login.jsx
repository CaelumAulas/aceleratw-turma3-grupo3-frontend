import React, { useState } from 'react';

import {
    TextField,
    Button,
    Container,
    Grid,
    Typography
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
        <Container>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '40vh' }}
            >
                <Typography variant="h5" component="h1" align="center" style={{ padding: 30 }}>
                    Carango Bom
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
        </Container>
    )
}