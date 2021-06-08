import React, { useState } from 'react';

import {
    Grid,
    Typography,
    TextField,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export function CreateUser() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const classes = useStyles();

    function handleSubmit(event) {
        event.preventDefault();
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
                <form onSubmit={handleSubmit} className={classes.root}>
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
                    <TextField
                        type="password"
                        id="confirmPassword"
                        label="Confirmação de Senha"
                        variant="outlined"
                        margin="normal"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        fullWidth
                    />
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
                    >
                        cancelar
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}