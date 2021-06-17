import React, { useState, useEffect, useContext } from "react";
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
import { fetchList } from '../api/api';

export function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const { handleChangeTitle } = useContext(MenuContext);
  const history = useHistory();

  function handleOpenCreateVehicle() {
    history.push("/cadastro-veiculo");
  }

  useEffect(() => {
    async function getVehicles() {
      await fetchList("/vehicle", setVehicles);
    }

    getVehicles();
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
            {vehicles.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.brand}</TableCell>
                <TableCell align="left">{row.model}</TableCell>
                <TableCell align="left">{row.year}</TableCell>
                <TableCell align="left">{row.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TableCell>
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
