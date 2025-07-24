import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../cart/CartContext";
import "./checkout.css";

const Checkout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [errors, setErrors] = useState({});


  const location = useLocation();
  const { cartItems: contextCartItems, clearCart } = useCart();

  // Try to get from navigation state, fallback to context
  const cartItems = location.state?.cartItems || contextCartItems;

  // Calculate subtotal based on cartItems from either source
  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price || 0) * (item.quantity || 1),
    0
  );
  // const [selectedMethod, setSelectedMethod] = useState("pay-credit");

  const [formData, setFormData] = useState({
    email: "",
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    apartment: "",
    city: "",
    zip_code: "",
    phone: "",
    smsOffers: false,
  });

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.id);
  };

  const isVisible = (id) => (selectedMethod === id ? "" : "d-none");

  const calculateTotal = (items) => {
    return items
      .reduce((total, item) => {
        const price = parseFloat(item.price || 0);
        const quantity = item.quantity || 1;
        return total + price * quantity;
      }, 0)
      .toFixed(2); // Return as string with 2 decimals
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!user && !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!user && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    ["first_name", "last_name", "address", "city", "zip_code", "phone"].forEach(
      (field) => {
        if (!formData[field].trim()) {
          newErrors[field] = `${field.replace("_", " ")} is required`;
        }
      }
    );

    if (!selectedMethod) {
      newErrors.payment = "Please select a payment method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      // Form is valid — do your submit logic here
      // console.log("Submitting:", { formData, selectedMethod });
      // alert("Form submitted successfully!");
      if (!user) {
        // User not logged in — save form data and redirect to signin
        localStorage.setItem(
          "pendingAddress",
          JSON.stringify({ formData, selectedMethod, cartItems })
        );
        navigate("/signin", { state: { from: "/checkout" } });
      } else {
        localStorage.setItem(
          "pendingAddress",
          JSON.stringify({ formData, selectedMethod, cartItems })
        );
        // User is logged in — submit to address API
        const itemDetailsObject = cartItems.reduce((acc, item) => {
          acc[item.diamondid] = {
            type: item.type,
            price: item.price,
            quantity: item.quantity,
            weight: item.carat_weight,
          };
          return acc;
        }, {});

        const addressObject = {
          apartment: formData.apartment,
          street: formData.address,
          city: formData.city,
          zip: formData.zip_code,
          country: formData.country,
        };
        try {
          const response = await axiosClient.post("/api/store-addresses", {
            user_id: user.id,
            first_name: formData.first_name,
            last_name: formData.last_name,
            country: formData.country,
            address: {
              apartment: formData.apartment,
              street: formData.address,
              city: formData.city,
              zip: formData.zip_code,
            },
            phone_number: formData.phone,
            is_get_offer: formData.smsOffers ? 1 : 0,
          });

          console.log("Address saved:", response.data);
          // alert("Address saved successfully!");

          // If user selected PayPal, create PayPal order and redirect
          if (selectedMethod === "pay-paypal") {
            const paypalResponse = await axiosClient.post(
              "/api/paypal/create-order",
              {
                amount: calculateTotal(cartItems),
                currency: "USD",
                user_id: user.id,
              }
            );

            const { orderID, approve_url } = paypalResponse.data;

            // Redirect user to PayPal approval page
            window.location.href = approve_url;
            return; // Stop further processing here, user is redirected to PayPal
          }

          const orderResponse = await axiosClient.post("/api/store-order", {
            user_id: user.id,
            user_name: `${formData.first_name} ${formData.last_name}`,
            contact_number: formData.phone,
            items_id: cartItems.map((item) => item.diamondid),
            item_details: JSON.stringify(itemDetailsObject),
            total_price: calculateTotal(cartItems),
            address: JSON.stringify(addressObject),
            order_status: "pending",
            payment_mode: selectedMethod,
            payment_status: "pending",
            is_gift: formData.isGift || false,
            notes: formData.notes || "",
          });

          clearCart();
          console.log("Order created:", orderResponse.data);
          navigate("/thankyou", { state: { order: orderResponse.data } });
        } catch (error) {
          console.error("Error submitting order:", error);
          alert("Failed to process your order.");
        }
      }
    }
  };

  useEffect(() => {
    const fetchAddress = async () => {
      if (user) {
        try {
          const res = await axiosClient.get(`/api/user-address/${user.id}`);
          const addr = res.data;

          if (addr) {
            setFormData((prev) => ({
              ...prev,
              first_name: addr.first_name,
              last_name: addr.last_name,
              country: addr.country,
              apartment: addr.address?.apartment || "",
              address: addr.address?.street || "",
              city: addr.address?.city || "",
              zip_code: addr.address?.zip || "",
              phone: addr.phone_number,
              smsOffers: addr.is_get_offer === 1,
            }));
          }
        } catch (err) {
          console.error("No existing address found.");
        }
      }
    };

    fetchAddress();

    const params = new URLSearchParams(location.search);
    const paypalStatus = params.get("paypal_status");

    const paypalOrderId = params.get("paypal_order_id");


    if (paypalStatus === "cancelled") {
      // 🟥 Handle PayPal cancellation
      alert("You cancelled the PayPal payment. Your order was not placed.");
      localStorage.removeItem("pendingAddress");
      // Optionally redirect or reset state
      navigate("/paymnet-failed", {
        state: {
          orderId: params.get("paypal_order_id"),

        },
      });
      return;
    }

    if (paypalStatus === "success" && user) {

      const saved = localStorage.getItem("pendingAddress");

      if (!saved) {
        console.warn("No pending address found after PayPal redirect.");
        return;
      }

      const {
        formData: savedFormData,
        selectedMethod: savedMethod,
        cartItems: savedCartItems,
      } = JSON.parse(savedData);
      console.log("Is cartItems an array?", Array.isArray(cartItems));
      console.log("Is cartItems empty?", cartItems?.length === 0);

      // Validate saved data exists
      if (
        !savedFormData.first_name ||
        !savedFormData.last_name ||
        !savedFormData.phone ||
        !Array.isArray(savedCartItems) ||
        savedCartItems.length === 0
      ) {
        alert("Incomplete order data. Please try ordering again.");
        navigate("/paymnet-failed", {
          state: {
            orderId: params.get("paypal_order_id"),
          },
        });
        return;
      }

      const itemDetailsObject = savedCartItems.reduce((acc, item) => {
        acc[item.diamondid] = {
          type: item.type,
          price: item.price,
          quantity: item.quantity,
          weight: item.carat_weight,
        };
        return acc;
      }, {});

      const addressObject = {
        apartment: savedFormData.apartment,
        street: savedFormData.address,
        city: savedFormData.city,
        zip: savedFormData.zip_code,
        country: savedFormData.country,
      };

      const finalizeOrder = async () => {
        try {
          const orderResponse = await axiosClient.post("/api/store-order", {
            user_id: user.id,
            user_name: `${savedFormData.first_name} ${savedFormData.last_name}`,
            contact_number: savedFormData.phone,
            items_id: savedCartItems.map((item) => item.diamondid),
            item_details: JSON.stringify(itemDetailsObject),
            total_price: calculateTotal(savedCartItems),
            address: JSON.stringify(addressObject),
            order_status: "confirmed",
            payment_mode: savedMethod,
            payment_status: "paid",
            is_gift: savedFormData.isGift || false,
            payment_id: paypalOrderId ?? null,
            notes: formData.notes || "",

          });

          clearCart();
          localStorage.removeItem("pendingOrderData");
          localStorage.removeItem("pendingAddress");

          navigate("/thankyou", { state: { order: orderResponse.data } });
        } catch (err) {
          console.error("Failed to finalize PayPal order:", err);
          alert("Payment was captured but we failed to place your order.");
        }
      };

      finalizeOrder();
    }
    // Restore form if coming back from /signin (no paypal status)
    const savedData = localStorage.getItem("pendingAddress");
    if (savedData && !paypalStatus) {
      const { formData, selectedMethod } = JSON.parse(savedData);
      setFormData(formData);
      setSelectedMethod(selectedMethod);
      // Don't remove it yet — only after successful final order
    }
  }, [user, navigate, location]);

 
  return (
    <>
      <section className="sign_up">
        <div className="container">
          <div className="row ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              {/* Redeem Section */}
              <div className="container my-5">
                <div className="redeem-card mb-4">
                  <h6>Redeem your Points</h6>
                  {user ? (
                    <p className="mb-2">
                      Logged in as <strong>{user.email}</strong>
                    </p>
                  ) : (
                    <p className="mb-2">
                      <Link className="link align-items_center" to="/signin">
                        Log in
                      </Link>{" "}
                      to view your points balance and discover rewards available
                      for redemption.
                    </p>
                  )}
                  <select className="form-select mb-2" disabled>
                    <option>Select a discount</option>
                  </select>
                  <button className="btn btn-disabled w-100" disabled>
                    Redeem
                  </button>
                </div>

                <div className="text-center mb-3">
                  <small className="text-muted">Express checkout</small>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mb-4">
                  <button className="express-btn btn-shop">
                    shop <strong>Pay</strong>
                  </button>
                  <button className="express-btn btn-paypal">PayPal</button>
                  <button className="express-btn btn-gpay">G Pay</button>
                </div>

                <div className="or-divider">
                  <span>OR</span>
                </div>
              </div>

              {/* Contact Section */}
              <div className="container my-5" style={{ maxWidth: "700px" }}>
                <div className="section-title d-flex justify-content-between align-items-center">
                  <span>Contact</span>
                  {user ? (
                    <span className="text-muted small">{user.email}</span>
                  ) : (
                    <Link
                      className="link text-primary align-items_center"
                      to="/signin"
                    >
                      Log in
                    </Link>
                  )}
                </div>

                {!user && (
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className={`form-control form-control-lg ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                )}

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="emailOffers"
                    checked={formData.emailOffers}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="emailOffers">
                    Email me with news and offers
                  </label>
                </div>

                <div className="section-title">Delivery</div>

                <div className="mb-3">
                  <select
                    className="form-select form-select-lg"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a country</option>
                    <option value="Canada">Canada</option>
                    <option value="United States">United States</option>
                  </select>
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-md">
                    <input
                      type="text"
                      name="first_name"
                      className={`form-control form-control-lg ${
                        errors.first_name ? "is-invalid" : ""
                      }`}
                      placeholder="First name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                    {errors.first_name && (
                      <div className="invalid-feedback">
                        {errors.first_name}
                      </div>
                    )}
                  </div>
                  <div className="col-md">
                    <input
                      type="text"
                      name="last_name"
                      className={`form-control form-control-lg ${
                        errors.last_name ? "is-invalid" : ""
                      }`}
                      placeholder="Last name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                    {errors.last_name && (
                      <div className="invalid-feedback">{errors.last_name}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3 position-relative">
                  <input
                    type="text"
                    name="address"
                    className={`form-control form-control-lg ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <span className="input-icon">
                    <i className="bi bi-search"></i>
                  </span>
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="apartment"
                    className="form-control form-control-lg"
                    placeholder="Apartment, suite, etc. (optional)"
                    value={formData.apartment}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="city"
                      className={`form-control form-control-lg ${
                        errors.city ? "is-invalid" : ""
                      }`}
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  {/* <div className="col-md-4">
                    <select className="form-select form-select-lg">
                      <option>Alabama</option>
                    </select>
                  </div> */}
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="zip_code"
                      className={`form-control form-control-lg ${
                        errors.zip_code ? "is-invalid" : ""
                      }`}
                      placeholder="ZIP code"
                      value={formData.zip_code}
                      onChange={handleInputChange}
                    />
                    {errors.zip_code && (
                      <div className="invalid-feedback">{errors.zip_code}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3 position-relative">
                  <input
                    type="text"
                    name="phone"
                    className={`form-control form-control-lg ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <span className="input-icon">
                    <i className="bi bi-question-circle"></i>
                  </span>
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="smsOffers"
                    name="smsOffers"
                    checked={formData.smsOffers}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="smsOffers">
                    Text me with news and offers
                  </label>
                </div>
              </div>

              {/* Payment Section */}
              <div className="container my-5" style={{ maxWidth: "700px" }}>
                {/* Section Title */}
                <div className="section-title">Payment</div>
                <p className="text-muted mb-3">
                  All transactions are secure and encrypted.
                </p>

                <div className="payment-option">
                  <input
                    type="radio"
                    name="payment-method"
                    id="cod"
                    checked={selectedMethod === "cod"}
                    onChange={handleMethodChange}
                  />
                  <span className="input-span">COD</span>
                </div>

                {/* Credit Card Option */}
                <div className="payment-option">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <input
                        type="radio"
                        name="payment-method"
                        id="pay-credit"
                        checked={selectedMethod === "pay-credit"}
                        onChange={handleMethodChange}
                      />
                      <strong> Credit card </strong>
                    </div>
                    <div className="card-icons">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                        alt="Visa"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/MasterCard_logo.png"
                        alt="MasterCard"
                      />
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Amex"
                      />
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Discover"
                      />
                      <span className="badge bg-secondary">+4</span>
                    </div>
                  </div>
                  <div className={`payment-box ${isVisible("pay-credit")}`}>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Card number"
                      />
                    </div>
                    <div className="row g-2 mb-2">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Expiration date (MM / YY)"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Security code"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name on card"
                      />
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="billingAddress"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billingAddress"
                      >
                        Use shipping address as billing address
                      </label>
                    </div>
                  </div>
                </div>

                {/* PayPal */}
                <div className="payment-option">
                  <input
                    type="radio"
                    name="payment-method"
                    id="pay-paypal"
                    checked={selectedMethod === "pay-paypal"}
                    onChange={handleMethodChange}
                  />
                  <span className="input-span">PayPal</span>

                  <div className={`payment-box ${isVisible("pay-paypal")}`}>
                    <p className="mt-2">You’ll be redirected to PayPal.</p>
                  </div>
                </div>

                {/* Synchrony */}
                <div className="payment-option">
                  <div>
                    <input
                      type="radio"
                      name="payment-method"
                      id="pay-synchrony"
                      checked={selectedMethod === "pay-synchrony"}
                      onChange={handleMethodChange}
                    />
                    <span className="input-span">
                      Synchrony Financing – Pay Over Time
                    </span>
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Synchrony"
                      style={{ height: "20px", float: "right" }}
                    />
                  </div>
                  <div className={`payment-box ${isVisible("pay-synchrony")}`}>
                    <p className="mt-2">
                      Apply with Synchrony for flexible financing.
                    </p>
                  </div>
                </div>

                {/* Affirm */}
                <div className="payment-option">
                  <input
                    type="radio"
                    name="payment-method"
                    id="pay-affirm"
                    checked={selectedMethod === "pay-affirm"}
                    onChange={handleMethodChange}
                  />
                  <span className="input-span">Affirm</span>
                  <div className={`payment-box ${isVisible("pay-affirm")}`}>
                    <p className="mt-2">Monthly payments with Affirm.</p>
                  </div>
                </div>

                {/* Multiple Payments */}
                <div className="payment-option">
                  <div>
                    <input
                      type="radio"
                      name="payment-method"
                      id="pay-multiple"
                      checked={selectedMethod === "pay-multiple"}
                      onChange={handleMethodChange}
                    />
                    <span className="input-span">Multiple Payments</span>
                  </div>
                  <div className={`payment-box ${isVisible("pay-multiple")}`}>
                    <p className="mt-2">
                      Split your total into multiple payment methods.
                    </p>
                  </div>
                </div>

                {/* Wire Transfer */}
                <div className="payment-option">
                  <div>
                    <input
                      type="radio"
                      name="payment-method"
                      id="pay-wire"
                      checked={selectedMethod === "pay-wire"}
                      onChange={handleMethodChange}
                    />
                    <span className="input-span">
                      Wire Transfer - Contact customer service to complete
                      payment.
                    </span>
                  </div>
                  <div className={`payment-box ${isVisible("pay-wire")}`}>
                    <p className="mt-2">
                      We'll contact you with bank transfer details after order
                      confirmation.
                    </p>
                  </div>
                </div>
                {errors.payment && (
                  <div className="text-danger mt-3 mb-3">{errors.payment}</div>
                )}
              </div>

              <div className="container my-5" style={{ maxWidth: "700px" }}>
                {/* Remember Me Section */}
                <div className="mb-3">
                  <h6>
                    <strong>Remember me</strong>
                  </h6>
                  <div className="remember-box">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberCheck"
                      >
                        Save my information for a faster checkout with a Shop
                        account
                      </label>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-phone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Mobile phone number"
                        defaultValue="+1"
                      />
                    </div>
                  </div>
                </div>

                {/* Secure Notice */}
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div className="secure-text">🔒 Secure and encrypted</div>
                  <div className="shop-logo">shop</div>
                </div>

                {/* Pay Now Button */}
                <button
                  type="button"
                  className="btn pay-button"
                  onClick={handleSubmit}
                >
                  Pay now
                </button>

                {/* Terms Text */}
                <p className="terms-text">
                  Your info will be saved to a Shop account. By continuing, you
                  agree to Shop’s <a href="#">Terms of Service</a> and
                  acknowledge the <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 co-sm-12 col-12">
              <div className="container my-5" style={{ maxWidth: "600px" }}>
                <div className="product-summary">
                  {/* Loop over cartItems */}
                 {cartItems.map((item, index) => {
  const totalItemPrice = (item.price * item.quantity).toFixed(2);
  const isDiamond = !!item.certificate_number;

  return (
    <div className="d-flex align-items-start mb-3" key={index}>
      <div className="me-3 position-relative">
        <img
          src={
            isDiamond
              ? `/images/shapes/${item.shape?.image || "placeholder.png"}`
              : item.image || "/images/placeholder.png"
          }
          alt={isDiamond ? item.shape?.name || "Diamond" : item.name || "Jewelry"}
          className="product-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/placeholder.png";
          }}
        />
        <span
          className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-dark"
          style={{ fontSize: "0.75rem" }}
        >
          {item.quantity}
        </span>
      </div>

      <div className="product-info flex-grow-1">
        {isDiamond ? (
          <>
            <strong>
              {item.carat_weight} Carat {item.shape?.name} Lab Diamond
            </strong>
            <br />
            <small>Color: {item.color?.name}</small>
            <br />
            <small>Clarity: {item.clarity?.name}</small>
            <br />
            <small>Cut: {item.cut?.full_name}</small>
          </>
        ) : (
          <>
            <strong>{item.name || "Jewelry Product"}</strong>
            <br />
            <small>Weight: {item.weight || "N/A"}g</small>
            <br />
            <small>
              Protection Plan: {item.selectedPlan?.toUpperCase() || "N/A"}
            </small>
          </>
        )}
      </div>

      <div className="text-end">
        <strong>${totalItemPrice}</strong>
      </div>
    </div>
  );
})}


                  {/* Discount Code */}
                  <div className="discount-box input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Discount code or gift card"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      disabled
                    >
                      Apply
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="d-flex justify-content-between mb-2">
                    <div className="text-gray">Subtotal</div>
                    <div>${subtotal.toFixed(2)}</div>
                  </div>

                  {/* Shipping */}
                  <div className="d-flex justify-content-between mb-3">
                    <div className="text-gray">
                      Shipping{" "}
                      <span title="Shipping will be calculated after entering address">
                        ❔
                      </span>
                    </div>
                    <div className="text-gray">Enter shipping address</div>
                  </div>

                  {/* Total */}
                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <div>
                      <strong>Total</strong>
                    </div>
                    <div>
                      <span className="currency">USD</span>{" "}
                      <span className="total-price">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
