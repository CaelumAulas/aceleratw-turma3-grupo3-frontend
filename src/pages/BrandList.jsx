import React, { useEffect, useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router";

import { MenuContext } from "../contexts/menu";

function createData(marca) {
  return { marca };
}

const rows = [
  createData("FORD"),
  createData("GM"),
  createData("RENAULT"),
  createData("VOLKSWAGEN"),
  createData("FIAT"),
  createData("TOYOTA"),
  createData("HYUNDAI"),
  createData("CITRÖEN"),
];

export function BrandList() {
  const { handleChangeTitle } = useContext(MenuContext);
  const history = useHistory();

  function handleOpenCreateBrand() {
    history.push("/cadastro-marca");
  }

  useEffect(() => {
    handleChangeTitle("Marcas");
  }, [handleChangeTitle]);

  return (
    <Container>
      <TableContainer
        className="lista-marcas__tabela"
        component={Paper}
        style={{ marginTop: 40 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Marca</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.marca}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ButtonGroup
        className="lista-marcas__acoes"
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
        style={{ marginTop: 20 }}
      >
        <Button>Excluir</Button>
        <Button>Alterar</Button>
        <Button onClick={handleOpenCreateBrand}>Incluir</Button>
      </ButtonGroup>
    </Container>
  );
}
