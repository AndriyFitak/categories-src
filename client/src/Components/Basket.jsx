import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/productsReducer';

const Basket = () => {
  const basketProducts = useSelector((state) => state.products.basket); // Отримуємо вибрані продукти з Redux
  const dispatch = useDispatch()
  const handleRemoveFromBasket = (product) => {
    dispatch(removeFromBasket(product))
  }
  return (
    <>
    <h2>Кошик</h2>
    <div className="basket">
          {basketProducts.map(product => (
           <div key={product.id} className="product-card">
           <h2>{product.name}</h2>
           <p>Price: ${product.price}</p>
           <p>Color: {product.color}</p>
           <p>Brand: {product.brand}</p>
           <p>Category: {product.category}</p>
           <button onClick={() => handleRemoveFromBasket(product)}>Видалити з кошику</button>
         </div>
        ))}
     
    </div>
    </>
  );
}

export default Basket;
