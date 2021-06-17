import React, { useEffect, useState } from 'react';

import {
    FormControl,
    InputLabel,
    Select
} from '@material-ui/core';

import { fetchList } from '../api/api';

export function BrandSelect({ value, changeValue }) {
    const [brands, setBrands] = useState([{ id: 2, name: "marca 2" }]);

    useEffect(() => {
        // fetchList("/brand", setBrands);
    }, [])

    return (
        <FormControl variant="outlined" style={{ minWidth: 200 }}>
            <InputLabel htmlFor="outlined-brand-native-simple">Marca</InputLabel>
            <Select
                native
                value={value}
                onChange={(event) => changeValue(event.target.value)}
                label="Marca"
                inputProps={{
                    name: 'brand',
                    id: 'outlined-brand-native-simple',
                }}
            >
                <option aria-label="None" value="" />
                {brands.map(brand =>
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                )}
            </Select>
        </FormControl>
    )
}