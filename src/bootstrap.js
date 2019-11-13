import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";


import Layout from "./components/layout";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import reducers from "./reducers";
import history from './history';
import "./style/main.scss";


const createStoreWithMiddleware = applyMiddleware()(createStore);



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Layout>
        <Router history={history}>
            <Switch>
              <Route path='/' exact component={SignIn} />
            </Switch>
        </Router>
      </Layout>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
