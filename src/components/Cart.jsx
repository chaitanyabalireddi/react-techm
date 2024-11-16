import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, updateItemQuantity, clearCart, showCart, toggleCart } = useCart();

  if (!showCart) return null; // Cart is hidden unless showCart is true.

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price_in_inr * item.quantity, 0);

  return (
    <div className="absolute top-16 right-4 bg-white shadow-lg p-6 rounded-lg  cart-container overflow-y-scroll h-3/4">
      <h2 className="text-lg text-center  font-bold mb-4">Your Cart</h2>

      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <img src={item.image} alt="" />
                <p className="text-sm text-gray-600">₹{item.price_in_inr}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-300 px-2 py-1 text-sm rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <p className="mx-2">{item.quantity}</p>
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 px-2 py-1 text-sm rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <p>₹{item.price_in_inr * item.quantity}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4 font-semibold text-lg">
            <p>Total:</p>
            <p>₹{totalPrice}</p>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
            <button
              onClick={toggleCart}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
