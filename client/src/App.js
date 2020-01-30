import React, { Component } from "react";
import logo from "./genericsports.jpg";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Athlete from "./Athlete";
import Home from "./Home"

class App extends Component {
  render() {
    const App = () => (
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Athletes" component={Athlete}></Route>
          </Switch>
    );
    return <App />;
  }
}

export default App;
