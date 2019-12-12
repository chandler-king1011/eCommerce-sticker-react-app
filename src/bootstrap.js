import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";




import Layout from "./components/layout";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Shop from "./components/shop/shop";
import Account from "./components/account/account";
import Review from "./components/order/review";
import reducers from "./reducers";
import history from './history';
import "./style/main.scss";


const createStoreWithMiddleware = applyMiddleware()(compose((window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => F)(createStore)));



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Layout>
        <Router history={history}>
            <Switch>
              <Route path='/' exact component={SignIn} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/shop' component={Shop} />
              <Route path='/account' component={Account} />
              <Route path='/order/review' component={Review} />
            </Switch>
        </Router>
      </Layout>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
