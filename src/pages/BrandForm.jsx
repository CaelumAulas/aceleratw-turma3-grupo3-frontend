import React, { useState, useEffect, useContext } from 'react';
import {
    TextField,
    Container
} from '@material-ui/core';

import { ButtonForm } from '../components/ButtonForm';
import { MenuContext } from '../contexts/menu';

export function BrandForm() {
    const [brandName, setBrandName] = useState();

    const { handleChangeTitle } = useContext(MenuContext);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(brandName);
    }

    useEffect(() => {
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
                    onChange={(event) => setBrandName(event.target.value)}
                    fullWidth
                    required
                />
                <ButtonForm />
            </form>
        </Container>
    )
}