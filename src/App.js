import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import LoginHeader from "./Pages/Header/LoginHeader.js";
// import ROUTER from "./Router.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import DragSortableList from "react-drag-sortable";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from "./firebaseConfig";
// import { Link, Switch, Route, Router } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import SideBar from "./Pages/SideBar/SideBar.js";
// function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
