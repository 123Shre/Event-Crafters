import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log("addToCart called with item:", item);
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem._id === item._id
    );
    if (existingItemIndex !== -1) {
      setCart(
        cart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    console.log("Cart after adding item:", cart);
  };

  const removeFromCart = (itemId) => {
    console.log("removeFromCart called with itemId:", itemId);
    const updatedCart = cart.filter((item) => item._id !== itemId);
    console.log("updatedCart after filtering:", updatedCart);
    setCart(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    console.log(
      "updateQuantity called with itemId:",
      itemId,
      "and newQuantity:",
      newQuantity
    );
    const updatedCart = cart.map((item) => {
      console.log("titmeme" + cart);
      if (item._id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    console.log("updatedCart after mapping:", updatedCart);
    setCart(updatedCart);
    console.log("Cart after updating quantity:", cart);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
