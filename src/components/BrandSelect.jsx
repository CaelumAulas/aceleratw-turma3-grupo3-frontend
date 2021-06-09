import React, { useEffect, useState } from 'react';

import {
    FormControl,
    InputLabel,
    Select
} from '@material-ui/core';

export function BrandSelect({ value, changeValue }) {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const brandsMock = [
            { id: 1, name: "brand 1" },
            { id: 2, name: "brand 2" },
            { id: 3, name: "brand 3" }
        ];

        setBrands(brandsMock);
    }, [])

    return (
        <FormControl variant="outlined" style={{ marginTop: 30, minWidth: 200 }}>
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