import React from "react"
import './App.css';
import { Shop } from "./components/shop"
import { Nav } from "./components/nav"
import { Home } from "./components/home"
import { Cart } from "./components/cart"
import { Contact } from "./components/contact";
import { Checkout } from "./components/checkout"
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";


function App() {
  console.log("rendered")
  let initJson;
  if (localStorage.getItem("cart") === (null || "[]")) {
    initJson = [];
  }
  else {
    initJson = JSON.parse(localStorage.getItem("cart"));
  }

  const deleteItem = (item) => {
    setCart(cart.filter((x) => {
      return JSON.stringify(x) !== JSON.stringify(item)
    }))
  }

  const addItemToCart = (name, price, img) => {
    // console.log(name, price, img)
    let index;
    if (cart.length === 0) {
      index = 0;
    }
    else {
      index = cart[cart.length - 1].index + 1;
    }

    const detail = {
      index: index,
      Name: name,
      Price: price,
      Img: img
    }

    setCart([...cart, detail])
  }

  const [cart, setCart] = React.useState(initJson)

  React.useEffect(() => {
    console.log("effect")
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

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
          <Cart del={deleteItem} />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;