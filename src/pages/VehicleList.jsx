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
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { Alert } from "@material-ui/lab";

import { MenuContext } from "../contexts/menu";
import { UserContext } from "../contexts/user";

import { fetchFormDelete, fetchList } from '../api/api';

export function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [showError, setShowError] = useState(false);

  const { handleChangeTitle } = useContext(MenuContext);
  const { token } = useContext(UserContext);
  const history = useHistory();

  async function handleDeleteVehicle(vehicleId) {
    try {
      await fetchFormDelete(`/vehicle/${vehicleId}`, token);
      setVehicles(oldValue => oldValue.filter(item => item.id !== vehicleId));
    } catch {
      setShowError(true);
    }
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
      {showError && <Alert severity="error">não foi possível remover este veículo</Alert>}
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
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.brand}</TableCell>
                <TableCell align="left">{row.model}</TableCell>
                <TableCell align="left">{row.year}</TableCell>
                <TableCell align="left">{row.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TableCell>
                <TableCell align="right">
                  <Button size="small" color="default" onClick={() => history.push(`/editar-veiculo/${row.id}`)}>Alterar</Button>
                  <Button size="small" color="secondary" onClick={() => handleDeleteVehicle(row.id)}>Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => history.push("/cadastro-veiculo")}>Incluir</Button>
    </Container>
  );
}
