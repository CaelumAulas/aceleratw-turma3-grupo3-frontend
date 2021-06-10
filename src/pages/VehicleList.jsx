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

function createData(marca, modelo, ano, valor) {
  return { marca, modelo, ano, valor };
}

const rows = [
  createData("FORD", "KA", 2020, 15000),
  createData("GM", "CORSA", 2015, 7000),
  createData("RENAULT", "SANDERO", 2017, 30000),
  createData("VOLKSWAGEN", "GOL", 2019, 19000),
  createData("FIAT", "UNO", 2017, 20000),
  createData("RENAULT", "KWID", 2020, 22000),
  createData("FIAT", "MOBI", 2018, 18000),
  createData("VOLKSWAGEN", "POLO", 2016, 14000),
];

export function VehicleList() {
  const { handleChangeTitle } = useContext(MenuContext);
  const history = useHistory();

  function handleOpenCreateVehicle() {
    history.push("/cadastro-veiculo");
  }

  useEffect(() => {
    handleChangeTitle("Veículos");
  }, [handleChangeTitle]);

  return (
    <Container>
      <TableContainer
        className="lista-veiculos__tabela"
        component={Paper}
        style={{ marginTop: 40 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Marca</TableCell>
              <TableCell align="left">Modelo</TableCell>
              <TableCell align="left">Ano</TableCell>
              <TableCell align="left">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.marca}</TableCell>
                <TableCell align="left">{row.modelo}</TableCell>
                <TableCell align="left">{row.ano}</TableCell>
                <TableCell align="left">{row.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ButtonGroup
        className="lista-veiculos__acoes"
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
        style={{ marginTop: 20 }}
      >
        <Button>Excluir</Button>
        <Button>Alterar</Button>
        <Button onClick={handleOpenCreateVehicle}>Incluir</Button>
      </ButtonGroup>
    </Container>
  );
}
