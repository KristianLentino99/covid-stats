import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../screens/HomePage";
import Index from "../screens/Index";
import Nations from "../screens/Nations";
import {BrowserRouter} from "react-router-dom";
import history from '../services/history';
export default function Routes() {
    return (
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/home" component={HomePage} />
                <Route path="/nations" component={Nations} />

            </Switch>
        </BrowserRouter>
    );
}
