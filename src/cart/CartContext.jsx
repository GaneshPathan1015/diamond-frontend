// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const getItemId = (item) => {
//     return item.certificate_number || item.sku || item.id; // fallback for jewelry
//   };

//   const addToCart = (item) => {
//     const itemId = getItemId(item);
//     const exists = cartItems.some(i => getItemId(i) === itemId);

//     if (!exists) {
//       const updated = [...cartItems, { ...item, quantity: 1 }];
//       setCartItems(updated);
//     }
//   };

//   const removeFromCart = (itemId) => {
//     const updated = cartItems.filter(item => getItemId(item) !== itemId);
//     setCartItems(updated);
//   };

//   const updateCartItem = (itemId, quantity) => {
//     const updated = cartItems.map(item =>
//       getItemId(item) === itemId ? { ...item, quantity } : item
//     );
//     setCartItems(updated);
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const cartCount = cartItems.length;

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         updateCartItem,
//         cartCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
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
    /* console.log("Cart Updated:", cartItems); */
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Unique ID helper
  const getItemId = (item) => item.certificate_number || item.sku || item.id;

  // Add item to cart (increments quantity if exists)
  const addToCart = (item) => {
    const itemId = getItemId(item);
    const exists = cartItems.some((i) => getItemId(i) === itemId);

    if (exists) {
      const updated = cartItems.map((i) =>
        getItemId(i) === itemId ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Remove item by ID
  const removeFromCart = (itemId) => {
    const updated = cartItems.filter((item) => getItemId(item) !== itemId);
    setCartItems(updated);
  };

  // Update item quantity (minimum 1)
  const updateCartItem = (itemId, quantity) => {
    const updated = cartItems.map((item) =>
      getItemId(item) === itemId
        ? { ...item, quantity: Math.max(1, quantity) }
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