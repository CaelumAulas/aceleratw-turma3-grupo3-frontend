import React, { useState, useEffect, useContext } from 'react';
import {
    Container,
    TextField,
    FormHelperText
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';

import { BrandSelect } from '../components/BrandSelect';
import { ButtonForm } from '../components/ButtonForm';

import { MenuContext } from '../contexts/menu';
import { UserContext } from '../contexts/user';
import { fetchFormCreate, fetchGetById } from '../api/api';

export function VehicleForm() {
    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [price, setPrice] = useState();
    const [helperText, setHelperText] = useState();

    const { handleChangeTitle } = useContext(MenuContext);
    const { token } = useContext(UserContext);
    const history = useHistory();
    const { id } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await fetchFormCreate(
                "/vehicle",
                JSON.stringify({
                    brand_id: brand,
                    model: model,
                    price: price,
                    year: year
                }),
                token
            );
            history.push("/lista-veiculos");
        } catch {
            setHelperText("não foi possível salvar o novo veículo.")
        }
    }

    useEffect(() => {
        async function verifyEditForm() {
            if (id) {
                try {
                    const vehicle = await fetchGetById(`/vehicle/${id}`, token);
                    if (vehicle) {
                        setBrand(vehicle.brand.id);
                        setModel(vehicle.model);
                        setYear(vehicle.year);
                        setPrice(vehicle.price);
                    }
                } catch {
                    console.log("deu erro");
                }
            }
        }

        verifyEditForm();
        handleChangeTitle("Cadastro de Veículos");
    }, [handleChangeTitle])

    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
                <BrandSelect value={brand} changeValue={setBrand} />
                <TextField
                    type="text"
                    id="model"
                    label="Modelo"
                    variant="outlined"
                    margin="normal"
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                    required
                    fullWidth
                />
                <TextField
                    type="number"
                    id="year"
                    label="Ano"
                    variant="outlined"
                    margin="normal"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    required
                    fullWidth
                />
                <TextField
                    type="number"
                    id="price"
                    label="Valor"
                    variant="outlined"
                    margin="normal"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                    fullWidth
                />
                <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                <ButtonForm />
            </form>
        </Container>
    )
}