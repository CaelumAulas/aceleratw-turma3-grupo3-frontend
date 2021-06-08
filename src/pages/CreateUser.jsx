import React, { useState } from 'react';

import {
    Grid,
    Typography,
    TextField,
    Button,
    FormHelperText
} from '@material-ui/core';

export function CreateUser() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [helperText, setHelperText] = useState();

    function handleSubmit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            setHelperText('senhas não conferem.');
        }

        console.log(username);
        console.log(password);
        console.log(confirmPassword);
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
                    Cadastro de Usuário
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
                        onClick={() => setHelperText(null)}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="password"
                        id="confirmPassword"
                        label="Confirmação de Senha"
                        variant="outlined"
                        margin="normal"
                        onClick={() => setHelperText(null)}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        fullWidth
                    />
                    <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        cadastrar
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        style={{ marginLeft: 10 }}
                    >
                        cancelar
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}