import React from 'react';
import {
    Button,
    ButtonGroup
} from '@material-ui/core';
import { useHistory } from 'react-router';

export function ButtonForm() {
    const history = useHistory();
    return (
        <ButtonGroup
            variant="contained"
            aria-label="contained primary button group"
            style={{ marginTop: 20 }}
        >
            <Button type="submit" color="primary"> salvar </Button>
            <Button onClick={history.goBack}> cancelar </Button>
        </ButtonGroup>
    )
}