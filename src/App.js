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

  const callIfbool = () => {
    index = parseInt(Object.keys(obj[obj.length - 1])) + 1;
    bool = false;
  }

  //Debugging - remove this !! - bug-1 
  try {
    if (bool) {
      callIfbool();
    }
  }

  catch {
    console.log("this is ", obj)
  }
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(obj))
  }, [obj])

  const addItemToCart = (name, price, img) => {
    if (isNaN(index)) {
      index = 0;
    }
    const itemData = {
      [index]: {
        "Name": name,
        "Price": price,
        "Img": img
      }
    }
    setObj([...obj, itemData])

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