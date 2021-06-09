import React, { useState } from 'react';
import {
    TextField,
    Container
} from '@material-ui/core';

import { ButtonForm } from '../components/ButtonForm';

export function BrandForm() {
    const [brandName, setBrandName] = useState();

    function handleSubmit(event) {
        event.preventDefault();

        console.log(brandName);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    id="brand"
                    label="Marca"
                    variant="outlined"
                    margin="normal"
                    onChange={(event) => setBrandName(event.target.value)}
                    fullWidth
                />
                <ButtonForm />
            </form>
        </Container>
    )
}