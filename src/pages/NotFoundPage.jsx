import React, { useEffect, useContext } from 'react';
import {
    Container,
    Typography
} from '@material-ui/core';
import { MenuContext } from '../contexts/menu';

export function NotFoundPage() {
    const { handleChangeTitle } = useContext(MenuContext);

    useEffect(() => {
        handleChangeTitle("Página não encontrada");
    }, [handleChangeTitle])

    return (
        <Container>
            <Typography variant="h6">
                Página não encontrada.
            </Typography>
        </Container>
    )
}