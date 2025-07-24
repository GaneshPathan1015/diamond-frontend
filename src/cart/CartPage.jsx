import React, { useState, useEffect } from "react";
import { useCart } from "../cart/CartContext";
import "./cart.css";
import Help from "../pages/contact/help";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart, updateCartItem } = useCart();

  // Helper function to determine item unique ID
  const getItemId = (item) => item.certificate_number || item.sku || item.id;

  // Quantity state
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[getItemId(item)] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleQuantityChange = (itemId, delta) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, (prev[itemId] || 1) + delta);
      updateCartItem(itemId, newQuantity);
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        cartItems,
        subtotal,
      },
    });
  };

  const subtotal = cartItems.reduce((total, item) => {
    const qty = quantities[getItemId(item)] || 1;
    return total + parseFloat(item.price || 0) * qty;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ padding: "100px 20px", minHeight: "60vh" }}
      >
        <h2 style={{ fontWeight: "500", color: "#1d3c45" }}>Shopping Cart is Empty</h2>
        <p className="mt-2" style={{ fontSize: "16px", color: "#555" }}>
          You have no items in your shopping cart.
        </p>
        <a href="/diamond" style={{ marginTop: "10px", color: "#0056b3", textDecoration: "none" }}>
          Click <span style={{ textDecoration: "underline" }}>here</span> to continue shopping.
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-left">
          <h2>Your cart</h2>

          <div className="promo-banner">
            <img src="/images/elements.webp" alt="Free Necklace" />
            <div>
              <p className="almost-there">YOU'RE ALMOST THERE!</p>
              <p>
                You are <strong>${460 - subtotal > 0 ? 460 - subtotal : 0}</strong> away from FREE{" "}
                <strong>Diamond Necklace</strong>.
              </p>
              <p>
                You are <strong>${2460 - subtotal > 0 ? 2460 - subtotal : 0}</strong> away from FREE{" "}
                <strong>Diamond Bracelet</strong>.
              </p>
            </div>
          </div>

          {cartItems.map((item, index) => {
            const itemId = getItemId(item);
            const quantity = quantities[itemId] || 1;
            const totalItemPrice = parseFloat(item.price || 0) * quantity;

            const isDiamond = !!item.certificate_number;

            return (
              <div key={index} className="product-card">
                <div className="product-top">
                <img
  src={
    isDiamond
      ? `/images/shapes/${item.shape?.image}`
      : item.image || "/images/placeholder.png"
  }
  alt={isDiamond ? item.shape?.name : item.name}
  className="product-img"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/images/placeholder.png";
  }}
/>


                  <div className="product-details">
                    <p>
                      <strong>
                        {isDiamond
                          ? `${item.shape?.name} - ${item.carat_weight} Carat`
                          : item.name}
                      </strong>
                    </p>
                    <p>${item.price}</p>

                    {isDiamond ? (
                      <>
                        <p>Color: {item.color?.name}</p>
                        <p>Clarity: {item.clarity?.name}</p>
                        <p>Cut: {item.cut?.full_name}</p>
                      </>
                    ) : (
                      <>
                        <p>Weight: {item.weight}g</p>
                        <p>Protection Plan: {item.selectedPlan?.toUpperCase()}</p>
                      </>
                    )}

                    <p>SHIP BY: Wednesday, May 21</p>
                    <p className="shipping-note">Track your order in real time before it ships</p>

                    <div className="quantity-control">
                      <button onClick={() => handleQuantityChange(itemId, -1)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => handleQuantityChange(itemId, 1)}>+</button>
                    </div>

                    <button
                      onClick={() => removeFromCart(itemId)}
                      className="remove-btn"
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-right">
          <div className="summary-card">
            <p className="subtotal">Subtotal : ${subtotal.toFixed(2)}</p>
            <p className="tax-info">Taxes and shipping calculated at checkout</p>
            <button className="checkout-btn" onClick={handleCheckout}>
              CHECKOUT
            </button>
            <p className="discount-note">
              GET50 - Get $50 off on orders above $1000 on checkout
            </p>

            <div className="summary-features">
              <p>✔ FREE INSURED SHIPPING</p>
              <p>✔ 30 DAY RETURNS</p>
              <p>✔ LIFETIME WARRANTY</p>
              <p>✔ SECURED CHECKOUT</p>
            </div>
          </div>

          <div className="verify-card">
            <h4>GET $100 OFF</h4>
            <p>on orders of $2000 and above</p>
            <p className="verify-text">
              Military, Nurses, and First Responders receive an exclusive ID.me discount. Verify your
              eligibility before ordering.
            </p>
            <button className="verify-btn">
              ✔ Verify with <strong>ID.me</strong>
            </button>
          </div>
        </div>
      </div>

      <Help />
    </>
  );
}
