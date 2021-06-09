import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
  Typography,
} from "@material-ui/core";

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
  return (
    <Grid
      className="lista-veiculos"
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Typography
        variant="h5"
        component="h1"
        align="center"
        style={{ marginTop: 60 }}
      >
        Veículos Disponíveis
      </Typography>
      <Grid item xs={6}>
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
      </Grid>
      <Grid item xs={3}>
        <ButtonGroup
          className="lista-veiculos__acoes"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          style={{ marginTop: 20 }}
        >
          <Button>Excluir</Button>
          <Button>Alterar</Button>
          <Button>Incluir</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
