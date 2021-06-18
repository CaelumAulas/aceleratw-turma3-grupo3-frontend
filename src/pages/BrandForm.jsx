import React, { useState, useEffect, useContext } from 'react';
import {
    TextField,
    Container,
    FormHelperText
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';

import { ButtonForm } from '../components/ButtonForm';
import { MenuContext } from '../contexts/menu';
import { UserContext } from '../contexts/user';
import { fetchFormCreate, fetchGetById, fetchFormUpdate } from '../api/api';

export function BrandForm() {
    const [brandName, setBrandName] = useState('');
    const [helperText, setHelperText] = useState('');

    const { handleChangeTitle } = useContext(MenuContext);
    const { token } = useContext(UserContext);
    const history = useHistory();
    const { id } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (id)
                await fetchFormUpdate(`/brand/${id}`, JSON.stringify({ name: brandName }), token);
            else
                await fetchFormCreate("/brand", JSON.stringify({ name: brandName }), token);
            history.push("/lista-marcas");
        } catch {
            setHelperText("não foi possível salvar a nova marca.")
        }
    }

    useEffect(() => {
        async function verifyEditForm() {
            if (id) {
                try {
                    const brand = await fetchGetById(`/brand/${id}`, token);
                    if (brand) {
                        setBrandName(brand.name);
                    }
                } catch {
                    history.goBack();
                }
            }
        }

        verifyEditForm();
        handleChangeTitle("Cadastrar de Marca");
    }, [handleChangeTitle, history, id, token])

    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    id="brand"
                    label="Marca"
                    variant="outlined"
                    margin="normal"
                    value={brandName}
                    onClick={() => setHelperText(null)}
                    onChange={(event) => setBrandName(event.target.value)}
                    fullWidth
                    required
                />
                <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                <ButtonForm />
            </form>
        </Container>
    )
}