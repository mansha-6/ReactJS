import './App.css'
import React from 'react';
import Person from './components/Person';
import Product from './components/Product';

const App = () => {
  return (
    <div>
      <Person name="Mansha Soni" age={22} />
      <Product name="Phone" price="$600" />
      <Person name="Sagariya Vaishnavi" age={21} />
      <Product name="Laptop" price="$1200" />
    </div>
  );
};

export default App;