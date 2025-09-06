import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./thankyou.css";

const ThankYou = () => {
  const location = useLocation();
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const orderId = queryParams.get("order_id");

    if (orderId) {
      // Fetch order details for PayPal redirect
      axiosClient.get(`/api/orders/${orderId}`).then((res) => {
        setOrder(res.data);
      });
    } else if (location.state?.order) {
      // Non-PayPal order from navigate()
      setOrder(location.state.order);
    }
  }, [location.state]);

  const handleViewOrder = () => {
    if (order) {
      navigate(`/order-details/:orderId`, { state: { order } });
    }
  };

  const handleContinueShopping = () => {
    navigate("/diamond");
  };

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <div className="thankyou-icon">
          <div className="checkmark">&#10003;</div>
          <div className="particles"></div>
        </div>
        {order ? (
          <>
            <h2 className="thankyou_h2">Thank you for ordering!</h2>
            <p className="thankyou_p">
              Order ID: <strong> {order.order_id}</strong>
            </p>
            <p className="thankyou_p">
              Total Price: <strong>{order.total_price}</strong>
            </p>
            <div className="thankyou-buttons">
              <button
                className="thankyou-btn-outline"
                onClick={handleViewOrder}
              >
                VIEW ORDER
              </button>
              <button
                className="thankyou-btn-filled"
                onClick={handleContinueShopping}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        ) : (
          <p>No order data found.</p>
        )}
      </div>
    </div>
  );
};

export default ThankYou;
