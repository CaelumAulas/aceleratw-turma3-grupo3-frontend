import React, { useState } from 'react';
import {
    Grid,
    Typography,
    TextField,
    Button
} from '@material-ui/core';

export function BrandForm() {
    const [brandName, setBrandName] = useState();

    function handleSubmit(event) {
        event.preventDefault();

        console.log(brandName);
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
                    Cadastro de Marca
                </Typography>
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