import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "../../jewellary-details/JewellaryDetails.css";

const protectionPlans = [
  { id: "1-year", label: "1 Year - $79" },
  { id: "2-year", label: "2 Year - $99" },
  {
    id: "3-year",
    label: (
      <>
        3 Year - $159 <br />
        <small className="text-muted">MOST POPULAR</small>
      </>
    ),
  },
];





const thumbnails = [
  "https://thecaratcasa.com/api/storage/variation_images//variation_1752338529_em9l4ffYgS.jpg",
  "/assets/images/thumb1.png",
  "/assets/images/thumb2.png",
];

const RingProductView = () => {
  const mainImage = "https://thecaratcasa.com/api/storage/variation_images//variation_1752338529_em9l4ffYgS.jpg";


const [selectedShape, setSelectedShape] = useState("Princess");

const shapes = [
  { name: "Round", image: "/shapes/round.png" },
  { name: "Oval", image: "/shapes/oval.png" },
  { name: "Emerald", image: "/shapes/emerald.png" },
  { name: "Cushion", image: "/shapes/cushion.png" },
  { name: "Princess", image: "/shapes/princess.png" },
  { name: "Radiant", image: "/shapes/radiant.png" },
  { name: "Heart", image: "/shapes/heart.png" },
  { name: "Pear", image: "/shapes/pear.png" },
];

const selectedShapeLabel = selectedShape.toUpperCase();


  return (
    <div className="container py-5">
      <div className="row">
        {/* Thumbnails */}
        <div className="col-md-1 d-flex flex-column align-items-center gap-2 thumbs">
          {thumbnails.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Thumb ${i + 1}`}
              className="thumb-image"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                border: "1px solid #ccc",
                padding: "2px",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>

        {/* Main image */}
        <div className="col-md-6 main-image">
          <div className="zoom-container">
            <Zoom>
              <img
                src={mainImage}
                alt="Main Product"
                className="img-fluid zoomable-image"
              />
            </Zoom>
          </div>
          <button className="btn btn-outline-dark mt-2">📷 VIRTUAL TRY ON</button>
        </div>

        {/* Product Info */}
        <div className="col-md-5">
          <h5 className="text-muted" style={{ fontSize: "32px", fontWeight: 600 }}>
            Classic Diamond Ring
          </h5>
          <p><span className="text-muted">• SKU: RING12345</span></p>
          <p>Price: <strong>₹79,999</strong></p>

          {/* Shape Section */}
<div className="shape-section">
  <p className="shape-title"><strong>SHAPE :</strong> <span>{selectedShapeLabel}</span></p>
  <div className="shape-options">
    {shapes.map((shape, index) => (
      <div
        key={index}
        className={`shape-item ${selectedShape === shape.name ? "active" : ""}`}
        onClick={() => setSelectedShape(shape.name)}
      >
        <img src={shape.image} alt={shape.name} />
      </div>
    ))}
  </div>
</div>


          <p className="mb-1">METAL COLOR</p>
          <div className="d-flex mb-3">
            <div className="option-circle" style={{ background: "#d4af37" }} title="Gold">
              18K
            </div>
            <div className="option-circle" style={{ background: "#aaa" }} title="White Gold">
              WG
            </div>
          </div>

          {/* Static carat weight */}
          <div className="product-variation__carat-group mb-3">
            <small>Total Carat Weight</small>
            <div className="d-flex flex-wrap gap-2 mt-1">
              <button className="product-variation__carat-pill active">0.50</button>
              <button className="product-variation__carat-pill">1.00</button>
              <button className="product-variation__carat-pill">1.50</button>
            </div>
          </div>

          <hr className="hr-line" />

          <p><strong>Weight:</strong> 4.5g</p>
          <p><strong>Description:</strong></p>
          <div className="bg-light p-2">
            A beautifully handcrafted diamond ring perfect for engagements or special occasions.
          </div>

          <hr className="hr-line" />

          {/* Protection Plan */}
          <div className="plan-title">ADD CLARITY COMMITMENT PROTECTION PLAN</div>
          <p className="protection-plan">
            Ensure your jewelry lasts a lifetime. <span title="More Info">ℹ️</span>
          </p>
          <div className="d-flex gap-2">
            {protectionPlans.map((plan) => (
              <div key={plan.id} className="option-btn">{plan.label}</div>
            ))}
          </div>

          <hr className="hr-line" />

          <div className="container py-4">
            <div className="mb-4">
              <button className="btn btn-dark w-100">Choose this setting</button>
              <button className="btn btn-outline-dark w-100 mt-2">VIRTUAL / SHOWROOM APPOINTMENT</button>

              <p className="mt-2 mb-0">Ships by <strong>Thurs, June 12</strong></p>
              <p className="mb-1"><span className="text-primary">0% APR</span> with affirm.</p>
              <p className="mb-2">Free Insured Shipping. <a href="#">30 Day Returns</a></p>

              <hr className="hr-line" />

              <div className="common-btn">
                <button className="btn btn-light"><i className="bi bi-envelope"></i> DROP A HINT</button>
                <button className="btn btn-light"><i className="bi bi-telephone"></i> CONTACT US</button>
                <button className="btn btn-light"><i className="bi bi-heart"></i> ADD TO WISHLIST</button>
                <button className="btn btn-light"><i className="bi bi-calendar-event"></i> SCHEDULE APPOINTMENT</button>
              </div>

              <div className="mt-2">
                <span className="me-2 share">SHARE :-</span>
                <i className="bi bi-pinterest"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-x"></i>
              </div>

              <div className="bg-light p-2 mt-3">
                <i className="bi bi-gift"></i> Earn 847 Points when you buy this item.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews mt-5">
        <h4>Customer Reviews</h4>
        <h5 className="mb-0">4.9 ★★★★★</h5>
        <small>Based on 17 Reviews</small>

        {[90, 8, 2, 0, 0].map((percent, i) => (
          <div className="d-flex align-items-center" key={i}>
            <span className="me-2">{5 - i} Star</span>
            <div className="progress flex-grow-1">
              <div className="progress-bar" style={{ width: `${percent}%` }}></div>
            </div>
          </div>
        ))}

        <div className="review-item mt-3">
          <strong>James R.</strong> <span className="text-success">Verified Buyer</span><br />
          ★★★★★<br />
          Love these earrings! The studs are absolutely stunning and catch the light perfectly.
        </div>
      </div>

      {/* Features */}
      <div className="features-section row align-items-center mt-5">
        <div className="col-md-6">
          <div className="feature-item">
            <h5>Gemologist Consultation</h5>
            <p>Our dedicated gemologists offer comprehensive support...</p>
          </div>
          <div className="feature-item">
            <h5>Conflict Free Diamonds</h5>
            <p>We are committed to sourcing diamonds from conflict-free regions...</p>
          </div>
          <div className="feature-item">
            <h5>Home Preview</h5>
            <p>Try your favorite designs from the comfort of your home...</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ratio ratio-4x3">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Feature Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products mt-5">
        <h4>Related Products</h4>
        <div className="d-flex flex-wrap">
          {[...Array(4)].map((_, i) => (
            <img key={i} src="/assets/images/main.png" className="product-thumb" alt="Related Product" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RingProductView;
