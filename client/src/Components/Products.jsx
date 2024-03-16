import React, { useState, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './products.css';
import loadingGif from './Spinner.gif'; 
import { addToBasket } from "../redux/productsReducer"
const Products = ({ filter }) => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.products.products);
  const basketProducts = useSelector((state) => state.products.basket);
  const dispatch = useDispatch()
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);
  
  const handleAddToBasket = (product) => {
    const isProductInBasket = basketProducts.some(item => item.id === product.id);
    if (!isProductInBasket) {
      dispatch(addToBasket(product));
    } else {
      alert('Ой,цей продукт вже є в кошику 😞');
    }
  }


  return (
    <div className="products">
      {loading ? (
        <div className="loading">
          <img src={loadingGif} alt="Loading" />
          <p>Loading...</p>
        </div>
      ) : (
        filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleAddToBasket(product)}>Додати в кошик</button> 
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
