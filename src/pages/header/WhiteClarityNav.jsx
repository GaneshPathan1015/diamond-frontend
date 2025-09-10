import React, { useState, useEffect } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../cart/CartContext";
import MegaMenu from "../mega-menu/megaMenu";
import { useMegaMenu } from "../../context/MegaMenuContext";
import "./whiteClarityNav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const WhiteClarityNav = () => {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/"; // Check if on homepage
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveringMegaMenu, setHoveringMegaMenu] = useState(false);
  const [enter, setEnter] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    mainCategories,
    categoryMap,
    collections,
    styles,
    shapes,
    loadingJewelry,
    loadingEngagement,
  } = useMegaMenu();

  useEffect(() => {
    const handleScroll = () => {
      setHoveredMenu(null); // Close any open mega menu
      setHoveringMegaMenu(false); // Stop hovering effect
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData = {
    WEDDING: {
      links: [],
      image: "",
    },
    DIAMONDS: {
      links: [],
      image: "",
    },
    "HIGH JEWELRY": { links: [], image: "" },
    COLLECTIONS: { links: [], image: "" },
    GIFTS: { links: [], image: "" },
    SALE: { links: [], image: "" },
  };

  const menuItems = [
    "ENGAGEMENT",
    "WEDDING",
    "DIAMONDS",
    "HIGH JEWELRY",
    "JEWELRY",
    "COLLECTIONS",
    "GIFTS",
    "SALE",
  ];

  const menuRoutes = {
    ENGAGEMENT: "/engagement",
    WEDDING: "/wedding-brands",
    DIAMONDS: "/diamond",
    "HIGH JEWELRY": "/high-jewelry",
    JEWELRY: "/jewelry-list",
    COLLECTIONS: "/collections",
    GIFTS: "/gifts",
    SALE: "/sale",
  };

  // let headerClass = "custom-navbar";

  // // Apply hover/scroll styles only if on the homepage
  // if (scrolled || hoveredMenu || enter) {
  //   headerClass += " scrolled";
  // }

  // // Apply fixed or no-home styles only if not on homepage
  // if (!isHome) {
  //   if (scrolled) {
  //     headerClass += " fixed";
  //   } else {
  //     headerClass += " no-home";
  //   }
  // }

  let headerClass = "custom-navbar";

  if (scrolled || hoveredMenu || enter) {
    headerClass += " scrolled";
  }

  if (!isHome) {
    if (scrolled) {
      headerClass += " fixed";
    } else {
      headerClass += " no-home";
    }
  }

  if (hoveringMegaMenu) {
    headerClass += " hovering-menu"; // New class to prevent flicker on scroll
  }

  const handleRedirect = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <header className={headerClass}>
        <div className="top-bar ">
          <strong>FREE INSURED SHIPPING & RETURNS | LIFETIME WARRANTY</strong>
        </div>

        <nav
          className="nav-container"
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <div className="nav-left">
            <Button
              className="hamburger-btn custom-color-btn"
              variant={undefined}
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </Button>
            <button className="appointment-btn" style={{ color: 'inherit' }}>
              <span className="icon">📅</span>
              <span className="text">Book an Appointment</span>
            </button>
          </div>

          {/* <div className="nav-logo">WITH CLARITY</div> */}

          <div className="nav-logo">
            <img
              src={isHome ? "/images/logo.png" : "/images/logo-23.png"}
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>

          {/* <div className="nav-right">
            <span className="icon-text">
              <span className="material-symbols-outlined">call</span>{" "}
              <span className="text">1.844.234.6463</span>
            </span>
            <span
              className="icon-text"
              onClick={handleRedirect}
              style={{ cursor: "pointer" }}
            >
              <span className="material-symbols-outlined">person</span>
              <span className="text">
                {user ? `Hi, ${user.name || "User"}` : "SIGN IN / UP"}
              </span>
            </span>

            <div className="icon position-relative">
              <Link
                to="/cart"
                className="d-flex align-items-center text-decoration-none text-current"
                style={{ color: "inherit" }}
              >
                <span className="icon-text">
                  <span className="material-symbols-outlined">local_mall</span>
                </span>
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
          </div> */}
          <div className="nav-right d-flex align-items-center gap-3">
            <div className="icon-text d-flex align-items-center gap-1">
              <span className="material-symbols-outlined">call</span>
              <span className="text">1.844.234.6463</span>
            </div>

            <div
              className="icon-text d-flex align-items-center gap-1"
              onClick={handleRedirect}
              style={{ cursor: "pointer" }}
            >
              <span className="material-symbols-outlined">person</span>
              <span className="text">
                {user ? `Hi, ${user.name || "User"}` : "SIGN IN / UP"}
              </span>
            </div>

            <div className="icon-text d-flex align-items-center gap-1 position-relative">
              <Link
                to="/cart"
                className="text-decoration-none text-current d-flex align-items-center"
                style={{ color: "inherit" }}
              >
                <span className="material-symbols-outlined">local_mall</span>
              </Link>
              {cartItems.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.75rem" }}
                >
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </nav>

        {/* Desktop Menu Bar */}
        <div
          className="menu-bar desktop-menu"
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`menu-item ${
                location.pathname === menuRoutes[item] ? "active" : ""
              }`}
              onMouseEnter={() => {
                setHoveredMenu(item);
                setHoveringMegaMenu(true);
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  if (!hoveringMegaMenu) setHoveredMenu(null);
                }, 50);
              }}
              onClick={() => navigate(menuRoutes[item] || "/")}
              style={{ cursor: "pointer" }}
            >
              {item}
            </div>
          ))}
        </div>
      </header>

      {/* Mega Menu (Desktop only) */}
      {hoveredMenu === "ENGAGEMENT" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu
            type="engagement"
            closeMegaMenu={() => setHoveredMenu(null)}
          />
        </div>
      )}

      {hoveredMenu === "JEWELRY" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="jewelry" closeMegaMenu={() => setHoveredMenu(null)} />
        </div>
      )}

      {/* Static menus */}
      {menuItems
        .filter((item) => item !== "ENGAGEMENT" && item !== "JEWELRY")
        .map(
          (item) =>
            hoveredMenu === item &&
            menuData[item] &&
            menuData[item].links.length > 0 && (
              <div
                key={item}
                className={`mega-menu-overlay ${
                  scrolled ? "scrolled-menu" : ""
                }`}
                onMouseEnter={() => setHoveredMenu(item)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="mega-content">
                  <div className="links">
                    <h4>{item}</h4>
                    <ul>
                      {menuData[item].links.map((link, idx) => (
                        <li key={idx}>{link}</li>
                      ))}
                    </ul>
                  </div>
                  {menuData[item].image && (
                    <div className="image">
                      <img src={menuData[item].image} alt={item} />
                    </div>
                  )}
                </div>
              </div>
            )
        )}

      {/* Mobile Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">WITH CLARITY</span>
          <Button
            className="close-btn custom-color-btn"
            variant={undefined}
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </Button>
        </div>
        <Accordion>
          {menuItems.map((item, i) => (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header>{item}</Accordion.Header>
              <Accordion.Body>
                {(item === "ENGAGEMENT" || item === "JEWELRY") && (
                  <MegaMenu
                    type={item.toLowerCase()}
                    closeMegaMenu={() => {}}
                  />
                )}
                {menuData[item] &&
                  menuData[item].links.length > 0 &&
                  item !== "ENGAGEMENT" &&
                  item !== "JEWELRY" &&
                  menuData[item].links.map((link, idx) => (
                    <div key={idx} className="submenu-item">
                      {link}
                    </div>
                  ))}
                {!menuData[item]?.links?.length &&
                  item !== "ENGAGEMENT" &&
                  item !== "JEWELRY" && <div>No Submenus</div>}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default WhiteClarityNav;
