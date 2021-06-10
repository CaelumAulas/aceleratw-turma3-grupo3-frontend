import React, { useState, useEffect, useContext } from 'react';
import {
    Container,
    TextField
} from '@material-ui/core';

import { BrandSelect } from '../components/BrandSelect';
import { ButtonForm } from '../components/ButtonForm';

import { MenuContext } from '../contexts/menu';

export function VehicleForm() {
    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [price, setPrice] = useState();

    const { handleChangeTitle } = useContext(MenuContext);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(brand);
        console.log(model);
        console.log(year);
        console.log(price);
    }

    useEffect(() => {
        handleChangeTitle("Cadastro de Veículos");
    }, [])

    return (
        <Container>
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
                <ButtonForm />
            </form>
        </Container>
    )
}