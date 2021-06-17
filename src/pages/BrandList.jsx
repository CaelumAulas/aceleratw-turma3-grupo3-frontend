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
  Container
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router";

import { MenuContext } from "../contexts/menu";
import { UserContext } from "../contexts/user";
import { fetchList, fetchFormDelete } from "../api/api";

export function BrandList() {
  const [brands, setBrands] = useState([]);
  const [showError, setShowError] = useState(false);

  const { handleChangeTitle } = useContext(MenuContext);
  const { token } = useContext(UserContext);
  const history = useHistory();

  async function handleDeleteBrand(brandId) {
    try {
      await fetchFormDelete(`/brand/${brandId}`, token);
      setBrands(oldValue => oldValue.filter(item => item.id !== brandId));
    } catch {
      setShowError(true);
    }
  }

  useEffect(() => {
    fetchList("/brand", setBrands);
    handleChangeTitle("Marcas");
  }, [handleChangeTitle]);

  return (
    <Container>
      {showError && <Alert severity="error">não foi possível remover esta marca</Alert>}
      <TableContainer
        className="lista-marcas__tabela"
        component={Paper}
        style={{ marginTop: 40 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Marca</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {brands.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">
                  <Button size="small" color="default" onClick={() => history.push(`/editar-marca/${row.id}`)}>Alterar</Button>
                  <Button size="small" color="secondary" onClick={() => handleDeleteBrand(row.id)}>Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => history.push("/cadastro-marca")}>Incluir</Button>
    </Container>
  );
}
