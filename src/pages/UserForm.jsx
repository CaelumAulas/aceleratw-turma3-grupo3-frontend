import React, { useState, useEffect, useContext } from 'react';
import {
    Container,
    TextField,
    FormHelperText
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { ButtonForm } from '../components/ButtonForm';

import { MenuContext } from '../contexts/menu';
import { UserContext } from '../contexts/user';

import { fetchFormCreate } from '../api/api';

export function UserForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [helperText, setHelperText] = useState();

    const { handleChangeTitle } = useContext(MenuContext);
    const { token } = useContext(UserContext);
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            setHelperText('senhas não conferem.');
        }

        try {
            await fetchFormCreate("/users", JSON.stringify({ user: username, password: password }), token);
            history.push("/lista-usuarios");
        } catch {
            setHelperText("não foi possível salvar o novo usuário.")
        }
    }

    useEffect(() => {
        handleChangeTitle("Cadastro de Usuários");
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
                    onClick={() => setHelperText(null)}
                    onChange={(event) => setPassword(event.target.value)}
                    fullWidth
                    required
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
                    required
                />
                <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                <ButtonForm />
            </form>
        </Container>
    )
}