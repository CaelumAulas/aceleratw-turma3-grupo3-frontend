import React from 'react';
import {
    Button
} from '@material-ui/core';

export function ButtonForm() {
    return (
        <div style={{ marginTop: 20 }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: 20 }} > salvar </Button>
            <Button variant="contained" > cancelar </Button>
        </div>
    )
}