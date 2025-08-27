import React, { useState, useEffect } from "react";
import { useCart } from "../cart/CartContext";
import Help from "../pages/contact/help";
import { useNavigate } from "react-router-dom";
import ComboCard from "./ComboCard";
import DiamondCard from "./DiamondCard";
import JewelryCard from "./JewelryCard";
import BuildCard from "./BuildCard";
import "./cart.css";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart, updateCartItem, getItemId } =
    useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[getItemId(item)] = item.itemQuantity;
    });
    setQuantities(initialQuantities);
  }, [cartItems, getItemId]);

  const handleQuantityChange = (itemId, delta) => {
    const currentQty = quantities[itemId];
    const newQty = Math.max(1, currentQty + delta);

    // First update local quantity state
    setQuantities((prev) => ({ ...prev, [itemId]: newQty }));

    // Then update the cart context state safely
    updateCartItem(itemId, newQty);
  };

  const toNumber = (val) => {
    if (typeof val === "number") return val;
    if (!val) return 0;
    const cleaned = String(val).replace(/[^0-9.-]/g, "");
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : 0;
  };

  // Decide unit price based on item.type
  const getUnitPrice = (item) => {
    switch (item.productType) {
      case "combo":
        // Prefer pre-computed combo price if present
        return toNumber(
          item.price ??
            toNumber(item.ring?.price) + toNumber(item.diamond?.price)
        );

      case "build":
        // Build might have multiple parts (extend as needed)
        return toNumber(
          item.price ??
            toNumber(item.ring?.price) + toNumber(item.diamond?.price)
        );

      case "diamond":
        return toNumber(item.price);

      case "jewelry":
        return toNumber(item.price);

      default:
        return toNumber(item.price);
    }
  };

  // Decide quantity (prefer context item.quantity)
  const getQty = (item, quantities, getItemId) =>
    (Number.isFinite(item.itemQuantity) ? item.itemQuantity : null) ??
    quantities[getItemId(item)];

  const subtotal = cartItems.reduce((sum, item) => {
    const price = getUnitPrice(item);
    const qty = getQty(item, quantities, getItemId);
    return sum + price * qty;
  }, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, subtotal } });
  };

  if (cartItems.length === 0) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ padding: "100px 20px", minHeight: "60vh" }}
      >
        <h2 style={{ fontWeight: "500", color: "#1d3c45" }}>
          Shopping Cart is Empty
        </h2>
        <p className="mt-2" style={{ fontSize: "16px", color: "#555" }}>
          You have no items in your shopping cart.
        </p>
        <a
          href="/diamond"
          style={{
            marginTop: "10px",
            color: "#0056b3",
            textDecoration: "none",
          }}
        >
          Click <span style={{ textDecoration: "underline" }}>here</span> to
          continue shopping.
        </a>
      </div>
    );
  }

  const renderCartItem = (item, index) => {
    const itemId = getItemId(item);
    const quantity = quantities[itemId];

    const cardProps = {
      item,
      quantity,
      onQuantityChange: (delta) => handleQuantityChange(itemId, delta),
      onRemove: () => removeFromCart(itemId),
    };

    switch (item.productType) {
      case "combo":
        return <ComboCard key={index} {...cardProps} />;
      case "build":
        return <BuildCard key={index} {...cardProps} />;
      case "diamond":
        return <DiamondCard key={index} {...cardProps} />;
      case "jewelry":
        return <JewelryCard key={index} {...cardProps} />;
      default:
        return <div key={index}>Unknown Item Type</div>;
    }
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-left">
          <h2>Your cart</h2>
          {cartItems.map(renderCartItem)}
        </div>

        <div className="cart-right">
          <div className="summary-card">
            <p className="subtotal">Subtotal : ${subtotal.toFixed(2)}</p>
            <p className="tax-info">
              Taxes and shipping calculated at checkout
            </p>
            <button className="checkout-btn" onClick={handleCheckout}>
              CHECKOUT
            </button>
            <p className="discount-note">
              GET50 - Get $50 off on orders above $1000 on checkout
            </p>

            <div className="summary-features">
              <p className="summary-features_p">✔ FREE INSURED SHIPPING</p>
              <p className="summary-features_p">✔ 30 DAY RETURNS</p>
              <p className="summary-features_p">✔ LIFETIME WARRANTY</p>
              <p className="summary-features_p">✔ SECURED CHECKOUT</p>
            </div>
          </div>

          <div className="verify-card">
            <h4>GET $100 OFF</h4>
            <p>on orders of $2000 and above</p>
            <p className="verify-text">
              Military, Nurses, and First Responders receive an exclusive ID.me
              discount. Verify your eligibility before ordering.
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
