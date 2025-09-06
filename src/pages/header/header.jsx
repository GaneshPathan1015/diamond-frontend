import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../cart/CartContext";
import MegaMenu from "../mega-menu/megaMenu";
import "./SecondHeader.css";

const Header = ({ onHoverChange }) => {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuType, setMegaMenuType] = useState(null);

  const timeoutRef = useRef(null);

  const handleRedirect = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  };

  const handleMegaMenuEnter = (type) => {
    clearTimeout(timeoutRef.current);
    setMegaMenuType(type);
    setShowMegaMenu(true);
    onHoverChange && onHoverChange(true);
  };

  const handleMegaMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
      setMegaMenuType(null);
      onHoverChange && onHoverChange(false);
    }, 200); // slight delay to allow moving between button and menu
  };

  return (
    <header className={`header-wrapper ${showMegaMenu ? "jwl-menu-open" : ""}`}>
      <div className="header-top-wrapper">
        <div className="container">
          <p className="m-0 text-center p-2 ">
            <strong className="text-white">
              FREE INSURED SHIPPING & RETURNS | LIFETIME WARRANTY
            </strong>
          </p>
        </div>
      </div>

      <div className="container py-2">
        {/* Top bar */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="left-side-logo-wrapper">
            <button
              type="button"
              className="border-0 bg-transparent text-white p-1 border-bottom d-flex gap-2 align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src="./svg/book-appoinment.svg" height={20} width={20} />
              Book an Appointment
            </button>
          </div>

          <div className="logo-wrapper">
            <a className="navbar-brand text-white" href="/">
              <img src="./images/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>

          <div className="right-side-logo-wrapper">
            <div className="d-flex align-items-center flex-wrap gap-3">
              {/* Phone */}
              <div className="icon phn-icon">
                <a
                  href="tel:+18168881111"
                  className="text-decoration-none text-white d-inline-flex align-items-center gap-2"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>+1 (816) 888-1111</span>
                </a>
              </div>

              {/* Login */}
              <div className="icon login-icon position-relative d-flex align-items-center justify-content-center">
                <button
                  className="text-decoration-none text-white bg-transparent border-0 d-flex align-items-center gap-2 flex-wrap"
                  onClick={handleRedirect}
                >
                  <span className="material-symbols-outlined">person</span>
                  <span className="text-white text-center text-md-start">
                    {user ? `Hi, ${user.name || "User"}` : "SIGN IN / UP"}
                  </span>
                </button>
              </div>

              {/* Wishlist */}
              <span className="material-symbols-outlined text-white">favorite</span>

              {/* Cart */}
              <div className="icon cart-icon position-relative">
                <Link
                  to="/cart"
                  className="text-decoration-none text-black position-relative d-flex align-items-center"
                >
                  <span className="material-symbols-outlined text-white">local_mall</span>
                  {cartItems.length > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Nav menu */}
        <nav className="py-2 navbar navbar-expand-lg text-center">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav text-center gap-4 align-items-center">
                <li
                  className="nav-item position-relative"
                  onMouseEnter={() => handleMegaMenuEnter("engagement")}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button
                    className="btn text-uppercase dropdown-toggle text-white"
                    onClick={() => navigate("/engagement")}
                  >
                    ENGAGEMENT
                  </button>
                  {showMegaMenu && megaMenuType === "engagement" && (
                    <div
                      className="jwl-mega-menu-container-fixed"
                      onMouseEnter={() => handleMegaMenuEnter("engagement")}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <MegaMenu type="engagement" />
                    </div>
                  )}
                </li>
                <li className="nav-item">
                  <button
                    className="btn text-uppercase dropdown-toggle text-white"
                    onClick={() => navigate("/wedding-brands")}
                  >
                    WEDDING
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn text-uppercase dropdown-toggle text-white"
                    onClick={() => navigate("/diamond")}
                  >
                    DIAMONDS
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn text-uppercase dropdown-toggle text-white">
                    HIGH JEWELRY
                  </button>
                </li>

                {/* Jewelry Hover w/ MegaMenu */}
                <li
                  className="nav-item position-relative"
                  onMouseEnter={() => handleMegaMenuEnter("jewelry")}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button
                    className="btn text-uppercase dropdown-toggle text-white"
                    onClick={() => navigate("/jewelry-list")}
                  >
                    Jewelry
                  </button>

                  {showMegaMenu && megaMenuType === "jewelry" && (
                    <div
                      className="jwl-mega-menu-container-fixed"
                      onMouseEnter={() => handleMegaMenuEnter("jewelry")}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <MegaMenu type="jewelry" />
                    </div>
                  )}
                </li>

                <li className="nav-item">
                  <button className="btn text-uppercase dropdown-toggle text-white">
                    COLLECTIONS
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn text-uppercase dropdown-toggle text-white">
                    GIFTS
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn text-uppercase dropdown-toggle text-white">
                    SALE
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
