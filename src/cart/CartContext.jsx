import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemId = (item) => {
    return item.certificate_number || item.sku || item.id; // fallback for jewelry
  };

  const addToCart = (item) => {
    const itemId = getItemId(item);
    const exists = cartItems.some(i => getItemId(i) === itemId);

    if (!exists) {
      const updated = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updated);
    }
  };

  const removeFromCart = (itemId) => {
    const updated = cartItems.filter(item => getItemId(item) !== itemId);
    setCartItems(updated);
  };

  const updateCartItem = (itemId, quantity) => {
    const updated = cartItems.map(item =>
      getItemId(item) === itemId ? { ...item, quantity } : item
    );
    setCartItems(updated);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItem,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
