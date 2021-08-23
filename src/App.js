import React from "react"
import './App.css';
import { Shop } from "./components/shop"
import { Nav } from "./components/nav"
import { Home } from "./components/home"
import { Cart } from "./components/cart"
import { Contact } from "./components/contact";
import { Checkout } from "./components/checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageDoesntExists } from "./components/404"
import { Detail } from "./components/detail";

function App() {
  let initJson;
  let lcl = localStorage.getItem("cart");

  if (lcl === null || lcl === "[]" || lcl === [] || lcl === "null") {
    initJson = []
    console.log("If block executed")
  }

  else {
    console.log(typeof (lcl), lcl)
    initJson = JSON.parse(localStorage.getItem("cart"))
  }

  const [cart, setCart] = React.useState(initJson)

  const addItemToCart = (name, price, img) => {
    let index;
    try {
      if (cart.length === 0) {
        index = 0;
      }
      else {
        index = cart[cart.length - 1].index + 1;
      }
    }
    catch {
      console.log("catch", cart)
    }

    const detail = {
      index: index,
      Name: name,
      Price: price,
      Img: img
    }

    setCart([...cart, detail])
  }


  React.useEffect(() => {
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
          <Cart cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/checkout">
          <Checkout setCart={setCart} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/details">
          <Detail />
        </Route>
        <Route component={PageDoesntExists} />
      </Switch>
    </Router>

  );
}

export default App;