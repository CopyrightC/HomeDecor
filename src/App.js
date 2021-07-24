import React from "react"
import './App.css';
import { Furniture } from "./components/furniture"

function App() {
  return (

    <div className="App">

      <Furniture img="https://images-na.ssl-images-amazon.com/images/I/81K8cuT1QDL._AC_SL1500_.jpg"
        name="Item"
        price="$79.99"
        detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Eveniet atque minima eligendi porro. Sapiente corrupti ratione iure expedita, 
         inventore ad id est at tenetur asperiores sed. Dolore accusantium, ipsum dolor 
         doloremque odio saepe at libero mollitia? Cupiditate?" />

    </div>


  );
}

export default App;
