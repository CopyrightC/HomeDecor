import React from "react"
import './App.css';
import { Shop } from "./components/shop"
import { Nav } from "./components/nav"
import { Home } from "./components/home"
import { Cart } from "./components/cart"
import { Checkout } from "./components/checkout"
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";


function App() {
  console.log("rendered")
  let initJson;
  if (localStorage.getItem("cart") === null) {
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
      </Switch>
    </Router>

  );
}




/*
Object structure - 
Object = {
  index : {
    Name,
    Price,
    Img
  }
}
 
let x = Object.keys(obj)
x = ["Index" , ...]
x.forEach((i)=>{
  return(
    <div>
      obj[i].name
      obj[i].price
      obj[i].img
    </div>
  )
})
*/

export default App;


/*
  let initialJson;
  let index;
  console.log(localStorage.getItem("cartItems"), "pog")
  if (localStorage.getItem("cartItems") == null || {}) {
    console.log("null")
    initialJson = {}
    index = 0;
  }

  else {

    initialJson = JSON.parse(localStorage.getItem("cartItems"));
    // console.log(initialJson)
    index = parseInt(Object.keys(initialJson[initialJson.length - 1])) + 1;

  }

  const [obj, setObj] = React.useState(initialJson);

  let copyObj = JSON.parse(JSON.stringify(obj))
  // console.log(index)
  // React.useEffect(() => {

  // }, [obj])

  const addItemToCart = (name, price, img) => {
    console.log("func called")
    if (isNaN(index)) {
      console.log("NaN")
      index = 0;
    }
    else {
      index = parseInt(Object.keys(obj[obj.length - 1])) + 1;
    }
    console.log("func index = ", index)
    const itemData = {
      [index]: {
        "Name": name,
        "Price": price,
        "Img": img
      }
    }
    copyObj[index] = itemData[index];
    console.log("this is copy", copyObj)
    setObj(copyObj);
    console.log(obj)
    localStorage.setItem("cartItems", JSON.stringify(obj))
    */