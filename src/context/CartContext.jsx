import React, { createContext, useState, useContext, useEffect } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Context Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cart items
  const [showCart, setShowCart] = useState(false); // Show/Hide cart state

  // Load cart from localStorage (if exists) on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateItemQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent negative or zero quantities
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear all items in the cart
  const clearCart = () => {
    setCart([]);
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        updateItemQuantity,
        clearCart,
        showCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use Cart Context
export const useCart = () => useContext(CartContext);
