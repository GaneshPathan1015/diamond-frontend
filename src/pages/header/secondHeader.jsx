import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../cart/CartContext";
import MegaMenu from "../mega-menu/megaMenu";
import "./SecondHeader.css";

const SecondHeader = ({ onHoverChange }) => {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaMenuType, setMegaMenuType] = useState(null);
  const timeoutRef = useRef(null);

  // Hide mega menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showMegaMenu) {
        setShowMegaMenu(false);
        onHoverChange && onHoverChange(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMegaMenu, onHoverChange]);

  const handleRedirect = () => {
    navigate(user ? "/profile" : "/signin");
  };

  const handleMegaEnter = (type) => {
    clearTimeout(timeoutRef.current);
    setMegaMenuType(type);
    setShowMegaMenu(true);
    onHoverChange && onHoverChange(true);
  };

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
      setMegaMenuType(null);
      onHoverChange && onHoverChange(false);
    }, 200);
  };

  return (
    <>
      <header
        className={`header-wrapper ${showMegaMenu ? "jwl-menu-open" : ""}`}
        style={{ position: "relative" }}
      >
        <div className="header-top-wrapper">
          <p className="m-0 text-center p-2">
            <strong className="text-white">
              FREE INSURED SHIPPING & RETURNS | LIFETIME WARRANTY
            </strong>
          </p>
        </div>

        <div className="container-fluid py-2 border-bottom">
  {/* Top Row */}
  <div className="row align-items-center text-center text-md-start">
    {/* Left side */}
    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-md-0">
      <button
        type="button"
        className="border-0 bg-transparent text-black p-1 border-bottom d-flex gap-2 align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          src="./svg/book-appoinment.svg"
          height={20}
          width={20}
          style={{ filter: "invert(100%)" }}
          alt="Book Appointment"
        />
        {/* Text only visible on large screens */}
        <span className="d-none d-lg-inline">Book an Appointment</span>
      </button>
    </div>

    {/* Logo center */}
    <div className="col-12 col-md-4 d-flex justify-content-center mb-2 mb-md-0">
      <a className="navbar-brand text-black" href="/">
        <img
          src="./images/logo-23.png"
          className="img-fluid"
          alt="Logo"
          style={{ maxHeight: "50px" }}
        />
      </a>
    </div>

    {/* Right side */}
    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
      {/* Phone */}
      <a
        href="tel:+18168881111"
        className="text-black text-decoration-none d-flex align-items-center gap-2"
      >
        <span className="material-symbols-outlined">call</span>
        {/* Phone number text only on large screens */}
        <span className="d-none d-lg-inline">+1 (816) 888-1111</span>
      </a>

      {/* User */}
      <button
        className="bg-transparent border-0 d-flex align-items-center gap-2"
        onClick={handleRedirect}
      >
        <span className="material-symbols-outlined text-black">person</span>
        <span className="text-black d-none d-lg-inline">
          {user ? `Hi, ${user.name || "User"}` : "SIGN IN / UP"}
        </span>
      </button>

      {/* Cart */}
      <Link
        to="/cart"
        className="text-black position-relative d-flex align-items-center"
      >
        <span className="material-symbols-outlined">local_mall</span>
        {cartItems.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  </div>

  {/* Navbar */}
  <nav className="navbar navbar-expand-lg py-2">
    <div className="container-fluid justify-content-center">
      {/* Toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Links */}
      <div
        className="collapse navbar-collapse justify-content-center"
        id="mainNavbar"
      >
        <ul className="navbar-nav text-center gap-4 align-items-center">
          <li
            className="nav-item"
            onMouseEnter={() => handleMegaEnter("engagement")}
            onMouseLeave={handleMegaLeave}
          >
            <button
              className="btn text-uppercase"
              onClick={() => {
                setShowMegaMenu(false);
                onHoverChange && onHoverChange(false);
                navigate("/engagement");
              }}
            >
              Engagement
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn text-uppercase"
              onClick={() => navigate("/wedding-brands")}
            >
              Wedding
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn text-uppercase"
              onClick={() => navigate("/diamond")}
            >
              Diamonds
            </button>
          </li>
          <li className="nav-item">
            <button className="btn text-uppercase">High Jewelry</button>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMegaEnter("jewelry")}
            onMouseLeave={handleMegaLeave}
          >
            <button
              className="btn text-uppercase"
              onClick={() => {
                setShowMegaMenu(false);
                onHoverChange && onHoverChange(false);
                navigate("/jewelry-list");
              }}
            >
              Jewelry
            </button>
          </li>
          <li className="nav-item">
            <button className="btn text-uppercase">Collections</button>
          </li>
          <li className="nav-item">
            <button className="btn text-uppercase">Gifts</button>
          </li>
          <li className="nav-item">
            <button className="btn text-uppercase">Sale</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>


        {/* Mega Menu (outside of container, full-width) */}
        {showMegaMenu && (
          <div
            className="jwl-mega-menu-dropdown"
            onMouseEnter={() => handleMegaEnter(megaMenuType)}
            onMouseLeave={handleMegaLeave}
          >
            <MegaMenu
              type={megaMenuType}
              closeMegaMenu={() => setShowMegaMenu(false)}
            />
          </div>
        )}
      </header>

      <div className="header-spacer"></div>
    </>
  );
};

export default SecondHeader;
