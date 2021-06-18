import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../contexts/user";

function PrivateRoute(props) {
    const { userIsLogged } = useContext(UserContext);

    return userIsLogged ? <Route path={props.path} exact={props.exact} component={props.component} /> :
        <Redirect to="/sign-in" />;
};

export default PrivateRoute;