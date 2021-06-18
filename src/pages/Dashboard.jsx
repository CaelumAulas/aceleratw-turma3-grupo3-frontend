import React, { useEffect, useContext, useState } from "react";
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
import { UserContext } from "../contexts/user";

import { fetchDashboard } from "../api/api";

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
  const [dashboardData, setDashboardData] = useState([]);

  const { handleChangeTitle } = useContext(MenuContext);
  const { token } = useContext(UserContext);
  const classes = useStyles();

  useEffect(() => {
    fetchDashboard("/dashboard", setDashboardData, token);
    handleChangeTitle("Dashboard");
  }, [handleChangeTitle, token]);

  return (
    <Container>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {dashboardData.map((row) => (
          <GridListTile key={row.brandName} cols={row.cols || 1}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} variant="h6" component="h6">
                  {row.brandName}
                </Typography>
                <Typography className={classes.p}>{row.totalVehicles} veículos disponíveis</Typography>
                <Typography className={classes.p}>R$ {row.amount}</Typography>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}
