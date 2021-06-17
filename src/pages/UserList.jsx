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
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { Alert } from "@material-ui/lab";

import { MenuContext } from "../contexts/menu";
import { UserContext } from "../contexts/user";

import { fetchFormDelete, fetchList } from '../api/api';

export function UserList() {
  const [users, setUsers] = useState([]);
  const [showError, setShowError] = useState(false);

  const { handleChangeTitle } = useContext(MenuContext);
  const { token } = useContext(UserContext);
  const history = useHistory();

  async function handleDeleteUser(userId) {
    try {
      await fetchFormDelete(`/users/${userId}`, token);
      setUsers(oldValue => oldValue.filter(item => item.id !== userId));
    } catch {
      setShowError(true);
    }
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
      {showError && <Alert severity="error">não foi possível remover este usuário</Alert>}
      <TableContainer
        className="lista-usuarios__tabela"
        component={Paper}
        style={{ marginTop: 40 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Usuário</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.user}</TableCell>
                <TableCell align="right">
                  <Button size="small" color="default" onClick={() => history.push(`/editar-usuario/${row.id}`)}>Alterar</Button>
                  <Button size="small" color="secondary" onClick={() => handleDeleteUser(row.id)}>Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => history.push("/cadastro-usuario")}>Incluir</Button>
    </Container>
  );
}
