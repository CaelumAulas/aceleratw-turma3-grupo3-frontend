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

function createData(username) {
  return { username };
}

const rows = [
  createData("admin"),
  createData("leticia"),
  createData("david"),
  createData("joao_matheus"),
  createData("william"),
  createData("camila"),
  createData("kelly"),
  createData("lucas"),
];

export function UserList() {
  const { handleChangeTitle } = useContext(MenuContext);
  const history = useHistory();

  function handleOpenCreateUser() {
    history.push("/cadastro-usuario");
  }

  useEffect(() => {
    handleChangeTitle("Usuários");
  }, [handleChangeTitle]);

  return (
    <Container>
      <TableContainer
        className="lista-usuarios__tabela"
        component={Paper}
        style={{ marginTop: 40 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Usuário</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ButtonGroup
        className="lista-usuarios__acoes"
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
        style={{ marginTop: 20 }}
      >
        <Button>Excluir</Button>
        <Button>Alterar</Button>
        <Button onClick={handleOpenCreateUser}>Incluir</Button>
      </ButtonGroup>
    </Container>
  );
}
