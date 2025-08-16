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
          <div className="container">
            <p className="m-0 text-center p-2">
              <strong className="text-white">
                FREE INSURED SHIPPING & RETURNS | LIFETIME WARRANTY
              </strong>
            </p>
          </div>
        </div>

        {/* <div className="container py-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="left-side-logo-wrapper">
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
                />
                Book an Appointment
              </button>
            </div>

            <div className="logo-wrapper">
              <a className="navbar-brand text-black" href="/">
                <img
                  src="./images/logo-23.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
            </div>

            <div className="right-side-logo-wrapper d-flex align-items-center gap-3">
              <a
                href="tel:+18168881111"
                className="text-black text-decoration-none d-inline-flex align-items-center"
              >
                <i
                  className="fa-solid fa-phone me-2"
                  style={{ color: "#fff" }}
                ></i>
                +1 (816) 888-1111
              </a>

              <button
                className="text-white bg-transparent border-0 d-flex align-items-center"
                onClick={handleRedirect}
              >
                <span class="material-symbols-outlined text-black">person</span>
                <span className="ms-2 text-black">
                  {user ? `Hi, ${user.name || "User"}` : "SIGN IN / UP"}
                </span>
              </button>

              <Link to="/cart" className="text-black  position-relative">
                <span class="material-symbols-outlined">local_mall</span>
                {cartItems.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <nav className="py-2 navbar navbar-expand-lg text-center">
            <div className="container-fluid">
              <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav text-center gap-4 align-items-center">
                  <li
                    className="nav-item position-static"
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
                      ENGAGEMENT
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn text-uppercase"
                      onClick={() => navigate("/wedding-brands")}
                    >
                      WEDDING
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
                    <button className="btn text-uppercase">HIGH JEWELRY</button>
                  </li>
                  <li
                    className="nav-item position-static"
                    onMouseEnter={() => handleMegaEnter("jewelry")}
                    onMouseLeave={handleMegaLeave}
                  >
                    <button
                      className="btn text-uppercase dropdown-toggle"
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
                    <button className="btn text-uppercase">GIFTS</button>
                  </li>
                  <li className="nav-item">
                    <button className="btn text-uppercase">SALE</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div> */}

        <div className="container py-2">
          <div className="row align-items-center">
            {/* Left side */}
            <div className="col-6 col-md-4 d-flex align-items-center">
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
                />
                <span className="d-none d-sm-inline">Book an Appointment</span>
              </button>
            </div>

            {/* Logo center */}
            <div className="col-6 col-md-4 text-center">
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
            <div className="col-12 col-md-4 mt-3 mt-md-0 d-flex justify-content-end align-items-center gap-3">
              <a
                href="tel:+18168881111"
                className="text-black text-decoration-none d-inline-flex align-items-center"
              >
                <i
                  className="fa-solid fa-phone me-2"
                  style={{ color: "#fff" }}
                ></i>
                <span className="d-none d-sm-inline">+1 (816) 888-1111</span>
              </a>

              <button
                className="text-white bg-transparent border-0 d-flex align-items-center"
                onClick={handleRedirect}
              >
                <span className="material-symbols-outlined text-black">
                  person
                </span>
                <span className="ms-2 text-black d-none d-sm-inline">
                  {user ? `Hi, ${user.name || "User"}` : "SIGN IN / UP"}
                </span>
              </button>

              <Link to="/cart" className="text-black position-relative">
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
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

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
