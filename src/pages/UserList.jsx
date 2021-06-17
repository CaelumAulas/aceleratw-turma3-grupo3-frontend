import React, { useEffect, useContext, useState } from "react";
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

export function UserList() {
  const [users, setUsers] = useState([]);
  const { handleChangeTitle } = useContext(MenuContext);
  const history = useHistory();

  function handleOpenCreateUser() {
    history.push("/cadastro-usuario");
  }

  useEffect(() => {
    async function getUsers() {
      await fetchList("/users", setUsers);
    }

    getUsers();
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
            {users.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.user}</TableCell>
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
