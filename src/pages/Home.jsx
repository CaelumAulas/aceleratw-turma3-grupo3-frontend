import React, { useState } from 'react';
import {
    Grid,
    List,
    ListItem,
} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import { Login } from './Login';
import { Vehicles } from './Vehicles';

export function Home() {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Router>
            <Grid xl={12}>

                <Grid xl={2}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem
                            button
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <Link to="/signin" style={{ textDecoration: 'none', color: '#000' }} >Sign In</Link>
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <Link to="/vehicles" style={{ textDecoration: 'none', color: '#000' }}>Veículos</Link>
                        </ListItem>
                    </List>
                </Grid>

                <Switch>
                    <Route exact path="/">
                        <Redirect to="/signin" />
                    </Route>
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/vehicles">
                        <Vehicles />
                    </Route>
                </Switch>

            </Grid>
        </Router >
    )
}