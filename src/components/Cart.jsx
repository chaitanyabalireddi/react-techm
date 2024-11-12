import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: '16px', border: '1px solid #333' }}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: '8px' }}>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price_in_inr}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
