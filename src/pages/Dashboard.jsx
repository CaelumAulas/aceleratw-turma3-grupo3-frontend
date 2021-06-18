import React, { useEffect, useContext } from "react";
import {
  Card,
  CardContent,
  Container,
  GridList,
  GridListTile,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MenuContext } from "../contexts/menu";

const useStyles = makeStyles({
  root: {
    borderRadius: 9,
    boxShadow: '0 3px 5px 2px rgba(200, 205, 230, .3)',
    border: '0.5px rgba(#DDDEE5 60%)',
    color: 'black',
    padding: '10px 30px',
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1876D2'
  },
  p: {
    fontSize: 14,
    marginBottom: 2,
  },
});

export function Dashboard() {
  const { handleChangeTitle } = useContext(MenuContext);
  const classes = useStyles();

  useEffect(() => {
    handleChangeTitle("Dashboard");
  }, [handleChangeTitle]);

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

  return (
    <Container>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {rows.map((row) => (
          <GridListTile key={row.marca} cols={row.cols || 1}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} variant="h6" component="h6">
                  {row.marca}
                </Typography>
                <Typography className={classes.p}>{row.ano} veículos disponíveis</Typography>
                <Typography className={classes.p}>R$ {row.valor}</Typography>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}
