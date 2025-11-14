import React from "react";
import "./diamondMenu.css";

const DiamondMenu = ({
  handleDiamondClick,
  closeMegaMenu,
  navigate,
  handlePriceFilter,
  handleCaratFilter,
}) => {
  return (
    <section className="jwl-mega-menu-inner">
      {/* Left Side col-9 */}
      <div className="diamond-megamenu-container">
        <div className="diamond-megamenu-text-section">
          {/* Categories col-3 */}
          <div className="col-6">
            <h6 className="jwl-menu-title">Lab Diamonds</h6>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Lab Diamonds" });
                closeMegaMenu();
              }}
            >
              Explore Lab Diamonds
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Colored Lab Diamond" });
                closeMegaMenu();
              }}
            >
              Explore Colored Lab Diamonds
            </p>

            <h6 className="jwl-menu-title mt-3">Fall Sale</h6>

            <h6 className="jwl-menu-title mt-3">Clarity Plus™ Diamonds</h6>

            <h6 className="jwl-menu-title mt-3">Natural Diamonds</h6>

            <h6 className="jwl-menu-title mt-3">Create Your Own Ring</h6>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Lab Diamond" });
                closeMegaMenu();
              }}
            >
              Lab Diamond
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Natural Diamond" });
                closeMegaMenu();
              }}
            >
              Natural Diamond
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Colored Lab Diamond" });
                closeMegaMenu();
              }}
            >
              Colored Lab Diamond
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Featured Deals" });
                closeMegaMenu();
              }}
            >
              Featured Deal Diamond
            </p>
          </div>

          {/* Price col-4 */}
          <div className="col-4">
            <h6 className="jwl-menu-title">Price</h6>
            <p onClick={() => handlePriceFilter(0, 2000)}>Under $2000</p>
            <p onClick={() => handlePriceFilter(2000, 4000)}>$2000 - $4000</p>
            <p onClick={() => handlePriceFilter(4000, 6000)}>$4000 - $6000</p>
            <p onClick={() => handlePriceFilter(6000, 8000)}>$6000 - $8000</p>
            <p onClick={() => handlePriceFilter(8000, 10000)}>$8000+</p>
          </div>

          {/* Carat col-5 */}
          <div className="col-2">
            <h6 className="jwl-menu-title">Carat</h6>
            <p onClick={() => handleCaratFilter(1, 2)}>1 to 2 ct.</p>
            <p onClick={() => handleCaratFilter(2, 3)}>2 to 3 ct.</p>
            <p onClick={() => handleCaratFilter(3, 4)}>3 to 4 ct.</p>
            <p onClick={() => handleCaratFilter(4, 6)}>4 to 6 ct.</p>
            <p onClick={() => handleCaratFilter(6, 20)}>6 ct. & above</p>
          </div>
        </div>

        {/* Right Side col-3 */}
        <div className="diamond-megamenu-img-section">
          <img
            src="/images/diamonds.webp"
            alt="Diamond"
            className="diamond-menu-img taller" // added custom class
          />
          <h6 className="fw-bold mt-3 ">Clarity Plus™ Diamonds</h6>
          <a href="#" className="shop-now">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiamondMenu;
