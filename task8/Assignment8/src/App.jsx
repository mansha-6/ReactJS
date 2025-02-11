
import './App.css'
import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Person name="Mansha" age={20} />
      <Product name="Phone" price="$699" />

      <Person name="Vaishnavi" age={23} />
      <Product name="Laptop" price="$1200" />
      
    </div>
  );
}

export default App;