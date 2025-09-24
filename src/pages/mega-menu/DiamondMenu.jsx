import React from "react";
import "./diamondMenu.css";

const DiamondMenu = () => {
  return (
    <section className="diamond-section py-3">
      <div className="container">
        <div className="row justify-content-center">
          {/* Main Wrapper col-8 */}
          <div className="col-12 col-lg-9">
            <div className="row">
              {/* Left Side col-9 */}
              <div className="col-12 col-lg-7">
                <div className="row">
                  {/* Categories col-3 */}
                  <div className="col-6">
                    <h6 className="menu-heading">Lab Diamonds</h6>
                    <p>Explore Lab Diamonds</p>
                    <p>Explore Colored Lab Diamonds</p>

                    <h6 className="menu-heading mt-4">Fall Sale</h6>

                    <h6 className="menu-heading mt-4">
                      Clarity Plus™ Diamonds
                    </h6>

                    <h6 className="menu-heading mt-4">Natural Diamonds</h6>

                    <h6 className="menu-heading mt-4">Create Your Own Ring</h6>
                    <p>Lab Diamond</p>
                    <p>Natural Diamond</p>
                    <p>Colored Lab Diamond</p>
                    <p>Featured Deal Diamond</p>
                  </div>

                  {/* Price col-4 */}
                  <div className="col-4">
                    <h6 className="menu-heading">Price</h6>
                    <p>Under $2000</p>
                    <p>$2000 - $4000</p>
                    <p>$4000 - $6000</p>
                    <p>$6000 - $8000</p>
                    <p>$8000+</p>
                  </div>

                  {/* Carat col-5 */}
                  <div className="col-2">
                    <h6 className="menu-heading">Carat</h6>
                    <p>1 to 2 ct.</p>
                    <p>2 to 3 ct.</p>
                    <p>3 to 4 ct.</p>
                    <p>4 to 6 ct.</p>
                    <p>6 ct. & above</p>
                  </div>
                </div>
              </div>

              {/* Right Side col-3 */}
              <div className="col-12 col-lg-5 text-center">
                <img
                  src="/images/diamonds.webp"
                  alt="Diamond"
                  className="diamond-img taller" // added custom class
                />
                <h6 className="fw-bold mt-3">Clarity Plus™ Diamonds</h6>
                <a href="#" className="shop-now">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondMenu;
