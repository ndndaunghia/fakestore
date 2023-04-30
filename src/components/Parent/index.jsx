import React, { useState } from 'react';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

export default function ParentComponent() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  }

  return (
    <div>
      {showCart ? <Cart cart={cart} /> : <ProductDetail addToCart={addToCart} />}
    </div>
  );
}