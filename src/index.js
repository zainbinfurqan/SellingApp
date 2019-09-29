import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import ProductView from "./Pages/Product/ProductView.js";
import LoginHeader from "./Pages/Header/LoginHeader.js";
import Footer from "./Pages/Footer/Footer.js";
import SideBar from "./Pages/SideBar/SideBar.js";
import AdminHome from './Pages/Admin/AdminHome.js'
// import {AuthProvider}  from './Auth';

const routing = (
  // <AuthProvider>
  <Router>
      <LoginHeader />
      <Route exact path="/home" component={App} />
      <Route exact path="/" component={App} />
      <Route path="/Product-view" component={ProductView} />
      <Route path="/Admin" component={AdminHome} />
      <Footer />
  </Router>
  // </AuthProvider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
