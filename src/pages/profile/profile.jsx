import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";
import "./profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [logoutLoading, setLogoutLoading] = useState(false);
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    next_page_url: null,
  });
  const ordersCache = useRef({});
  const navigate = useNavigate();

  /*  const orders = [
    {
      id: "ORD-60740a91",
      items: 4,
      price: 584.5,
      status: "pending",
      date: "9/19/2025",
      payment: "COD (pending)",
      image: "https://via.placeholder.com/60",
    },
    {
      id: "ORD-6b90797d",
      items: 4,
      price: 584.5,
      status: "pending",
      date: "9/19/2025",
      payment: "COD (pending)",
      image: "https://via.placeholder.com/60",
    },
    {
      id: "ORD-75c0294e",
      items: 4,
      price: 514.66,
      status: "pending",
      date: "9/19/2025",
      payment: "COD (pending)",
      image: "https://via.placeholder.com/60",
    },
    {
      id: "ORD-60740a91",
      items: 4,
      price: 584.5,
      status: "pending",
      date: "9/19/2025",
      payment: "COD (pending)",
      image: "https://via.placeholder.com/60",
    },
    {
      id: "ORD-6b90797d",
      items: 4,
      price: 584.5,
      status: "pending",
      date: "9/19/2025",
      payment: "COD (pending)",
      image: "https://via.placeholder.com/60",
    },
    {
      id: "ORD-75c0294e",
      items: 4,
      price: 514.66,
      status: "pending",
      date: "9/19/2025",
      payment: "COD (pending)",
      image: "https://via.placeholder.com/60",
    },
  ]; */

  const fetchOrders = async (page = 1) => {
    if (ordersCache.current[page]) {
      setOrders((prev) => [...prev, ...ordersCache.current[page]]);
      setPagination((prev) => ({ ...prev, current_page: page }));
      return;
    }

    try {
      setLoading(true);
      const response = await axiosClient.get(`/api/get-orders?page=${page}`);
      const data = response.data.data || [];

      ordersCache.current[page] = data;
      setOrders((prev) => [...prev, ...data]);
      setPagination({
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        next_page_url: response.data.next_page_url,
      });
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    if (activeTab === "orders") {
      if (orders.length === 0) fetchOrders(1);
    }
  }, [activeTab]);

  // Infinite scroll
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !loading && pagination.current_page < pagination.last_page) {
      fetchOrders(pagination.current_page + 1);
    }
  };

  const renderOrders = () => {
    return orders.map((order, index) => (
      <div className="order-card shadow-sm" key={index}>
        <div className="d-flex align-items-center order-left">
          <img
            src={order.image || "https://via.placeholder.com/60"}
            alt="diamond"
            className="order-img"
          />
          <div className="ms-3">
            <p className="mb-1 fw-bold">Order Id: {order.order_id}</p>
            <small>Items: {order.items || order.order_items_count || 0}</small>
          </div>
        </div>
        <div className="ms-auto text-end order-right">
          <p className="text-success fw-bold mb-1">
            ${order.total_price || "0.00"}
          </p>
          <p className="text-danger mb-0">
            ● {order.status} on {order.date} <br />
            <span className="text-muted">Payment: {order.payment_status || "NA"}</span>
          </p>
        </div>
      </div>
    ));
  };
  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <>
            {/* <div className="tab-content-box">
            <h4 className="mb-3">Order History</h4>
            {orders.map((order, i) => (
              <div className="order-card shadow-sm" key={i}>
                <div className="d-flex align-items-center order-left">
                  <img src={order.image} alt="diamond" className="order-img" />
                  <div className="ms-3">
                    <p className="mb-1 fw-bold">Order Id: {order.id}</p>
                    <small>Items: {order.items}</small>
                  </div>
                </div>
                <div className="ms-auto text-end order-right">
                  <p className="text-success fw-bold mb-1">
                    ${order.price.toFixed(2)}
                  </p>
                  <p className="text-danger mb-0">
                    ● {order.status} on {order.date} <br />
                    <span className="text-muted">Payment: {order.payment}</span>
                  </p>
                </div>
              </div>
            ))}
          </div> */}
            <div
              className="tab-content-box scrollable-orders"
              onScroll={handleScroll}
              style={{ maxHeight: "70vh", overflowY: "auto" }}
            >
              <h4 className="mb-3">Order History</h4>
              {renderOrders()}
              {loading && <p>Loading more orders...</p>}
            </div>
          </>
        );

      case "account":
        return (
          <div className="tab-content-box">
            <h4>Account Details</h4>
            <p>Here you can update your account details.</p>
          </div>
        );

      case "address":
        return (
          <>
            <h4>Saved Addresses</h4>
            <p>Manage your shipping and billing addresses here.</p>

            <div className="address-grid">
              {/* Existing Address */}
              <div className="address-card">
                <div className="address-info">
                  <h4>Ganesh Pathan</h4>
                  <p>United States</p>
                  <span className="default-badge">Default</span>
                </div>
                <div className="address-actions">
                  <button className="btn btn-profile edit">Edit</button>
                  <button className="btn btn-profile delete">Delete</button>
                </div>
              </div>

              {/* Add New Address */}
              <div className="address-card add-new">
                <span>+ Add a New Address</span>
              </div>
            </div>
          </>
        );

      case "financing":
        return (
          <>
            <section className="finance-section my-2">
              {/* Title */}
              <div className="text-center mb-4">
                <h5 className="text-uppercase text-secondary">Credit Card</h5>
                <h2 className="fw-bold">Financing Program</h2>
                <p className="mt-3 text-muted">
                  We offer customers a credit card through Synchrony Bank with a
                  revolving credit line to use again and again at
                  withclarity.com.
                </p>
                <p className="text-muted">
                  You can apply for a We Store Credit Card{" "}
                  <a href="#" className="text-primary fw-semibold">
                    here
                  </a>
                  . Get a decision instantly.
                </p>
              </div>

              {/* Offer */}
              <div className="offer-box text-center mb-5 p-4">
                <h3 className="fw-bold text-dark">
                  No interest for 12 Months**
                </h3>
                <p
                  className="text-muted mt-2 mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  No interest on purchases of $199 or more with your Synchrony
                  Financial credit card. Interest will be charged to your
                  account from the date of purchase if the full amount is not
                  paid within 12 months. Minimum monthly payments required.
                </p>
              </div>

              {/* How it works */}
              <div className="text-center mb-4">
                <h3 className="fw-bold">How it works</h3>
              </div>
              <div className="row text-center g-4">
                <div className="col-12 col-md-3">
                  <div className="step-card p-3">
                    <img
                      src="https://img.icons8.com/ios-filled/100/000000/add-shopping-cart.png"
                      className="mb-3"
                      alt="Add to Cart"
                      width="60"
                    />
                    <h5 className="fw-semibold">Add to Cart</h5>
                    <p className="text-muted small">
                      Browse jewelry and add to your shopping cart.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="step-card p-3">
                    <img
                      src="https://img.icons8.com/ios-filled/100/000000/credit-card.png"
                      className="mb-3"
                      alt="Secure Checkout"
                      width="60"
                    />
                    <h5 className="fw-semibold">Secure Checkout</h5>
                    <p className="text-muted small">
                      At checkout, select We Credit Card as your payment option.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="step-card p-3">
                    <img
                      src="https://img.icons8.com/ios-filled/100/000000/money.png"
                      className="mb-3"
                      alt="Apply for financing"
                      width="60"
                    />
                    <h5 className="fw-semibold">Apply for financing</h5>
                    <p className="text-muted small">
                      Apply for We Credit Card.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="step-card p-3">
                    <img
                      src="https://img.icons8.com/ios-filled/100/000000/checklist.png"
                      className="mb-3"
                      alt="Order Complete"
                      width="60"
                    />
                    <h5 className="fw-semibold">Order Complete</h5>
                    <p className="text-muted small">
                      If approved, use your issued card number to complete your
                      purchase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="text-center mt-5">
                <a
                  href="#"
                  className="btn btn-profile btn-dark btn-lg px-5 rounded-pill shadow-sm"
                >
                  Apply Now
                </a>
              </div>
            </section>
          </>
        );

      default:
        return null;
    }
  };
  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <div className="container-fluid my-account-container">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4 col-12 mb-3">
          <h3 className="mb-4 text-center text-md-start">MY ACCOUNT</h3>
          <ul className="list-group flex-md-column flex-row text-center text-md-start">
            <li
              className={`list-group-item ${
                activeTab === "orders" ? "active" : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              🛒 Order History
            </li>
            <li
              className={`list-group-item ${
                activeTab === "account" ? "active" : ""
              }`}
              onClick={() => setActiveTab("account")}
            >
              👤 Account Details
            </li>
            <li
              className={`list-group-item ${
                activeTab === "address" ? "active" : ""
              }`}
              onClick={() => setActiveTab("address")}
            >
              📍 View Addresses
            </li>
            <li
              className={`list-group-item ${
                activeTab === "financing" ? "active" : ""
              }`}
              onClick={() => setActiveTab("financing")}
            >
              💳 Financing
            </li>
          </ul>

          <button
            className="btn btn-profile btn-dark w-100 mt-4"
            onClick={handleLogout}
            disabled={logoutLoading}
          >
            {logoutLoading ? "Logging out..." : "LOG OUT"}
          </button>
        </div>

        {/* Content */}
        <div className="col-lg-9 col-md-8 col-12 content-area">
          <div className="scroll-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
