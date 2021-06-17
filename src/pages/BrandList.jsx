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
import { fetchList } from "../api/api";

export function BrandList() {
  const [brands, setBrands] = useState([]);
  const { handleChangeTitle } = useContext(MenuContext);
  const history = useHistory();

  function handleOpenCreateBrand() {
    history.push("/cadastro-marca");
  }

  useEffect(() => {
    fetchList("/brand", setBrands);
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
            {brands.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
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
