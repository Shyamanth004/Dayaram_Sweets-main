import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.selectedWeight === product.selectedWeight
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.selectedWeight === product.selectedWeight
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: (item.price / item.quantity) * (item.quantity + 1),
              }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id, selectedWeight) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id || item.selectedWeight !== selectedWeight));
  };

  const clearCart = () => setCartItems([]);

  const updateQuantity = (id, selectedWeight, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.selectedWeight === selectedWeight
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
