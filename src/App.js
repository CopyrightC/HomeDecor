import React from "react"
import './App.css';
import { Shop } from "./components/shop"
import { Nav } from "./components/nav"
import { Home } from "./components/home"
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
function App() {
  return (

    <Router>
      <Nav />
      <Switch>
        <Route exact path="/shop">
          <div className="App">
            <Shop />
          </div>
        </Route>
        <Route exact path="/">
          <div className="home">
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
