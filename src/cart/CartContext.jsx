import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Unique ID helper
  const getItemId = (item) => {
    // console.log(item);

    if (item.productType === "combo") {
      return `combo-${item.ring?.id}-${item.diamond?.diamondid}-${item.size}`;
    }
    if (item.productType === "diamond") {
      return `diamond-${item.diamondid}`;
    }
    if (item.productType === "jewelry") {
      return `jewelry-${item.id}`;
    }
    if (item.productType === "build") {
      return `build-${item.id}-${item.size}-${item.diamondtype}`;
    }
  };

  // Add item to cart (increments quantity if exists)
  const addToCart = (item) => {
    const itemId = getItemId(item);
    const exists = cartItems.some((i) => getItemId(i) === itemId);

    if (exists) {
      const updated = cartItems.map((i) =>
        getItemId(i) === itemId ? { ...i, itemQuantity: i.itemQuantity + 1 } : i
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...item }]);
    }
  };

  // Remove item by ID
  const removeFromCart = (itemId) => {
    const updated = cartItems.filter((item) => getItemId(item) !== itemId);
    setCartItems(updated);
  };

  // Update item quantity (minimum 1)
  const updateCartItem = (itemId, itemQuantity) => {
    const updated = cartItems.map((item) =>
      getItemId(item) === itemId
        ? { ...item, itemQuantity: Math.max(1, itemQuantity) }
        : item
    );
    setCartItems(updated);
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemId,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
