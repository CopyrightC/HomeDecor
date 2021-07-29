import React from "react"
import './App.css';
import { Shop } from "./components/shop"
import { Nav } from "./components/nav"
import { Home } from "./components/home"
import { Cart } from "./components/cart"
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";


function App() {
  let initialJson;
  let index;
  let bool = false;
  if (localStorage.getItem("cartItems") === null) {
    initialJson = []
    index = 0;
  }
  else {
    initialJson = JSON.parse(localStorage.getItem("cartItems"));
    bool = true;
  }

  const [obj, setObj] = React.useState(initialJson);

  if (bool) {
    index = parseInt(Object.keys(obj[obj.length - 1])) + 1;
    bool = false;
  }

  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(obj))
  }, [obj])

  const addItemToCart = (name, price, img) => {

    const itemData = {
      [index]: {
        "Name": name,
        "Price": price,
        "Img": img
      }
    }
    setObj([...obj, itemData])
  }

  return (

    <Router>
      <Nav />
      <Switch>
        <Route exact path="/shop">
          <div className="App">

            <Shop func={addItemToCart} />
          </div>
        </Route>
        <Route exact path="/">
          <div className="home">
            <Home />
          </div>
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
