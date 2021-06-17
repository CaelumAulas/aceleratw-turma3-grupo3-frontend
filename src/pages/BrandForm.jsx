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
import { fetchFormCreate, fetchGetById } from '../api/api';

export function BrandForm() {
    const [brandName, setBrandName] = useState();
    const [helperText, setHelperText] = useState();

    const { handleChangeTitle } = useContext(MenuContext);
    const { token } = useContext(UserContext);
    const history = useHistory();
    const { id } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
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
                    console.log("deu erro");
                }
            }
        }

        verifyEditForm();
        handleChangeTitle("Cadastrar de Marca");
    }, [handleChangeTitle])

    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    id="brand"
                    label="Marca"
                    variant="outlined"
                    margin="normal"
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