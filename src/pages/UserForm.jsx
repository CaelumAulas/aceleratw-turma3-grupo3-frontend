import React, { useState } from 'react';

import {
    Container,
    TextField,
    FormHelperText
} from '@material-ui/core';
import { ButtonForm } from '../components/ButtonForm';

export function UserForm() {
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
        <Container>
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
                <ButtonForm />
            </form>
        </Container>
    )
}