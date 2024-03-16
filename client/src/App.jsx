import React, { useState } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Products from './Components/Products';
import Categories from './Components/Categories';
import Basket from "./Components/Basket"
import Header from "./Components/Header"
import './App.css';

function App() {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Route exact path="/" render={() => (
        <>
          <h1>Product Catalog</h1>
          <Categories handleFilterChange={handleFilterChange} />
          <Products filter={filter} />
        </>
      )} />
      <Route path="/basket" component={Basket} />
    </div>
  </BrowserRouter>
  );
}

export default App;
