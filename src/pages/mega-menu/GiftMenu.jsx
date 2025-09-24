import React from "react";
import "./giftMenu.css";

const GiftMenu = () => {
  return (
    <section className="gift-menu-section container-fluid py-2">
      <div className="row justify-content-center">
        {/* Centered col-9 */}
        <div className="col-12 col-lg-9">
          <div className="row">
            {/* Left Section (Text) - 6 cols */}
            <div className="col-lg-7 col-md-12 d-flex">
              <div className="row w-100">
                {/* Category */}
                <div className="col-6 col-md-3">
                  <h6 className="menu-title">CATEGORY</h6>
                  <ul className="menu-list">
                    <li>Rings</li>
                    <li>Necklaces</li>
                    <li>Earrings</li>
                    <li>Bracelets</li>
                    <li className="fw-bold mt-2">SHOP ALL</li>
                  </ul>
                </div>

                {/* Price */}
                <div className="col-6 col-md-3">
                  <h6 className="menu-title">PRICE</h6>
                  <ul className="menu-list">
                    <li>Under $500</li>
                    <li>Under $1000</li>
                    <li>Under $1500</li>
                  </ul>
                </div>

                {/* Collections */}
                <div className="col-6 col-md-3">
                  <h6 className="menu-title">COLLECTIONS</h6>
                  <ul className="menu-list">
                    <li>Bouquet</li>
                    <li>Toi et Moi</li>
                    <li>The Ceramic Series</li>
                    <li>Elements</li>
                    <li>Vine</li>
                    <li>Cluster</li>
                  </ul>
                </div>

                {/* Discover More */}
                <div className="col-6 col-md-3">
                  <h6 className="menu-title">DISCOVER MORE</h6>
                  <ul className="menu-list">
                    <li>Most Loved</li>
                    <li>Gift Sets</li>
                    <li>Ready to Ship</li>
                    <li>For Him</li>
                    <li>Gift Cards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section (Image + Text) - 3 cols */}
            <div className="col-lg-3 col-md-12 text-center gift-image-box">
              <img
                src="/images/best-gifts.webp"
                alt="Best Selling Gifts"
                className="img-fluid mb-3"
              />
              <h5 className="fw-bold">Best-Selling Gifts</h5>
              <a href="#" className="shop-now-link">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GiftMenu;
