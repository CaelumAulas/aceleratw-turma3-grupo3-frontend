import React, { useState } from 'react';
import {
    Grid,
    Typography,
    TextField,
    Button
} from '@material-ui/core';

import { BrandSelect } from '../components/BrandSelect';

export function VehicleForm() {
    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [price, setPrice] = useState();

    function handleSubmit(event) {
        event.preventDefault();

        console.log(brand);
        console.log(model);
        console.log(year);
        console.log(price);
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
                    Cadastro de Veículo
                </Typography>
                <form onSubmit={handleSubmit}>
                    <BrandSelect value={brand} changeValue={setBrand} />
                    <TextField
                        type="text"
                        id="model"
                        label="Modelo"
                        variant="outlined"
                        margin="normal"
                        onChange={(event) => setModel(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        id="year"
                        label="Ano"
                        variant="outlined"
                        margin="normal"
                        onChange={(event) => setYear(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        id="price"
                        label="Valor"
                        variant="outlined"
                        margin="normal"
                        onChange={(event) => setPrice(event.target.value)}
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