import React, { useEffect, useState, useMemo } from "react";
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
  const { clearCart, getItemId } = useCart();

  // Try to get from navigation state, fallback to context
  const { cartItems, subtotal = 0 } = location.state || {};

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

  const payload = {
    items: (cartItems || []).map((item) => {
      if (item.productType === "combo") {
        return {
          productType: "combo",
          size: item.size,
          itemQuantity: item.itemQuantity,
          ring: item.ring, // full ring object
          diamond: item.diamond, // full diamond object
        };
      } else if (item.productType === "diamond") {
        return {
          productType: "diamond",
          ...item, // send full diamond object
        };
      } else if (item.productType === "build") {
        return {
          productType: "build",
          ...item, // send full ring object
        };
      } else if (item.productType === "jewelry") {
        return {
          productType: "jewelry",
          ...item,
        };
      }
      return item;
    }),
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.id);
  };

  const isVisible = (id) => (selectedMethod === id ? "" : "d-none");

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
      if (!user) {
        // User not logged in — save form data and redirect to signin
        localStorage.setItem(
          "pendingAddress",
          JSON.stringify({ formData, selectedMethod, payload })
        );
        navigate("/signin", { state: { from: "/checkout" } });
      } else {
        localStorage.setItem(
          "pendingAddress",
          JSON.stringify({ formData, selectedMethod, payload })
        );
        // User is logged in — submit to address API

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

          // If user selected PayPal, create PayPal order and redirect
          if (selectedMethod === "pay-paypal") {
            const paypalResponse = await axiosClient.post(
              "/api/paypal/create-order",
              {
                amount: subtotal,
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
            item_details: JSON.stringify(payload),
            total_price: subtotal,
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
      //  Handle PayPal cancellation
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
      // const saved = localStorage.getItem("pendingAddress");

      // if (!saved) {
      //   console.warn("No pending address found after PayPal redirect.");
      //   return;
      // }

      const {
        formData: savedFormData,
        selectedMethod: savedMethod,
        cartPayload: savedPayload,
      } = JSON.parse(saved);
      console.log("Is cartItems an array?", Array.isArray(cartItems));
      console.log("Is cartItems empty?", cartItems?.length === 0);

      // Validate saved data exists
      if (
        !savedFormData.first_name ||
        !savedFormData.last_name ||
        !savedFormData.phone ||
        !Array.isArray(savedPayload) ||
        savedPayload.length === 0
      ) {
        alert("Incomplete order data. Please try ordering again.");
        navigate("/paymnet-failed", {
          state: {
            orderId: params.get("paypal_order_id"),
          },
        });
        return;
      }

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
            item_details: JSON.stringify(savedPayload),
            total_price: subtotal,
            address: JSON.stringify(addressObject),
            order_status: "confirmed",
            payment_mode: savedMethod,
            payment_status: "paid",
            is_gift: savedFormData.isGift || false,
            payment_id: paypalOrderId ?? null,
            notes: formData.notes || "",
          });

          clearCart();
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

  const getImageUrl = (img) => {
    const fallback = `${
      import.meta.env.VITE_BACKEND_URL
    }/storage/variation_images/No_Image_Available.jpg`;
    if (!img) return fallback;
    return `${
      import.meta.env.VITE_BACKEND_URL
    }/storage/variation_images/${img}`;
  };

  const diamondType = (type) => {
    return type === 1 ? "Natural " : type === 2 ? "Lab " : "N/A";
  };

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

              {/* Remember Me Section */}
              <div className="container" style={{ maxWidth: "700px" }}>
                {/* <div className="mb-3">
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
                        type="number"
                        className="form-control border-start-0"
                        placeholder="Mobile phone number"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div> */}

                {/* <div className="d-flex justify-content-between align-items-center mt-2">
                  <div className="secure-text">🔒 Secure and encrypted</div>
                  <div className="shop-logo">shop</div>
                </div> */}

                <button
                  type="button"
                  className="pay-button"
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
                  {cartItems?.map((item) => {
                    const itemId = getItemId(item);

                    let unitPrice;
                    if (item.productType === "combo") {
                      const ringPrice = Number(item.ring?.price ?? 0);
                      const diamondPrice = Number(item.diamond?.price ?? 0);
                      unitPrice = ringPrice + diamondPrice;
                    } else {
                      unitPrice = Number(item.price ?? 0);
                    }

                    const qty = Number(item.itemQuantity ?? 1);
                    const total = (unitPrice * qty).toFixed(2);

                    let imageUrl = null;
                    if (item.productType === "diamond" && item.shape?.image) {
                      imageUrl = `/images/shapes/${item.shape.image}`;
                    } else if (
                      item.productType === "combo" &&
                      item.ring?.images?.[0]
                    ) {
                      imageUrl = getImageUrl(item.ring.images[0]);
                    } else if (item.images?.[0]) {
                      imageUrl = getImageUrl(item.images[0]);
                    }

                    return (
                      <div
                        className="d-flex align-items-start mb-3"
                        key={itemId}
                      >
                        {/* IMAGE OR ALT */}
                        <div className="me-3 position-relative">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={item.name || "Product"}
                              className="product-img"
                              onError={(e) => {
                                e.currentTarget.style.display = "none"; // hide broken img
                                e.currentTarget.parentNode.innerHTML = `<span>${
                                  item.name || "Product"
                                }</span>`;
                              }}
                            />
                          ) : (
                            <span className="no-image-text">
                              {item.name || "Product"}
                            </span>
                          )}

                          <span
                            className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-dark"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {qty}
                          </span>
                        </div>

                        {/* PRODUCT INFO */}
                        <div className="product-info flex-grow-1">
                          {item.productType === "diamond" && (
                            <>
                              <strong>
                                {item.carat_weight} Carat {item.shape?.name}{" "}
                                {diamondType(item.diamond_type)}
                                Diamond
                              </strong>
                              <br />

                              <small>Color: {item.color?.name}</small>
                              <small>Clarity: {item.clarity?.name}</small>
                              <small>Cut: {item.cut?.full_name}</small>
                            </>
                          )}

                          {item.productType === "jewelry" && (
                            <>
                              <strong>{item.name || "Jewelry Product"}</strong>
                              <small>Weight: {item.weight || "N/A"}g</small>
                              <small>
                                Metal Color: {item.metal_color.name || "N/A"}
                              </small>
                              <small>
                                Protection Plan:
                                {item.selectedPlan?.toUpperCase() || "N/A"}
                              </small>
                            </>
                          )}

                          {item.productType === "combo" && (
                            <>
                              <strong> {item.ring?.name}</strong>

                              <small>
                                Engagement Ring with{" "}
                                {item.diamond?.carat_weight}ct{" "}
                                {item.diamond?.shape?.name}{" "}
                                {diamondType(item.diamond.diamond_type)}
                                Diamond
                              </small>
                              <small>
                                Metal Color{" "}
                                {item.ring.metal_color.name || "N/A"}{" "}
                              </small>
                              <small>Size {item.size}</small>
                              <small>Shape {item.diamond?.shape?.name} </small>
                            </>
                          )}

                          {item.productType === "build" && (
                            <>
                              <strong>{item.name || "Custom Jewelry"}</strong>
                              <small>
                                Metal Color: {item.metal_color.name}
                              </small>
                              <small>Shape: {item.shape}</small>
                              <small>Size: {item.size}</small>
                              <small>Type: {item.diamondtype}</small>
                            </>
                          )}
                        </div>

                        {/* ITEM TOTAL PRICE */}
                        <div className="text-end ms-3">
                          <strong>${total}</strong>
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
