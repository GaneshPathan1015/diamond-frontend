import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../cart/CartContext";
import MegaMenu from "../mega-menu/megaMenu";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useMegaMenu } from "../../context/MegaMenuContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./whiteClarityNav.css";

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

  const dynamicJewelrySubmenu = !loadingJewelry
    ? mainCategories.map((main) => ({
        title: main.name,
        items: (categoryMap[main.name.toUpperCase()] || []).map(
          (sub) => sub.name
        ),
      }))
    : [];

  const giftsMenuData = [
    {
      title: "CATEGORY",
      items: [
        { label: "Rings", slug: "diamond-ring-gifts" },
        { label: "Necklaces", slug: "necklace-gifts" },
        { label: "Earrings", slug: "earring-gifts" },
        { label: "Bracelets", slug: "bracelet-gifts" },
        { label: "SHOP ALL", slug: "jewelry-gifts", className: "fw-bold mt-2" },
      ],
    },
    {
      title: "PRICE",
      items: [
        { label: "Under $500", slug: "gifts-under-500" },
        { label: "Under $1000", slug: "gifts-under-1000" },
        { label: "Under $1500", slug: "gifts-under-1500" },
      ],
    },
    {
      title: "COLLECTIONS",
      items: [
        { label: "Bouquet", slug: "bouquet" },
        { label: "Toi et Moi", slug: "toi-et-moi-collection" },
        { label: "Vine", slug: "vine-collection" },
      ],
    },
    {
      title: "DISCOVER MORE",
      items: [
        { label: "Most Loved", slug: "incredible-value" },
        { label: "Gift Sets", slug: "jewelry-gift-sets" },
        { label: "Ready to Ship", slug: "ready-to-ship-diamond-jewelry-gifts" },
        { label: "For Him", slug: "jewelry-gifts-for-him" },
        { label: "Gift Cards", slug: "caratcasa-gift-card" },
      ],
    },
  ];

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

  const menuDatab = [
    {
      label: "Engagement",
      submenu: [
        {
          title: "START WITH A SETTING",
          items: [],
          hasToggle: true,
          children: [
            {
              title: "STYLE",
              items: styles.map((style) => style.psc_name),
            },
            {
              title: "SHAPE",
              items: shapes.map((shape) => shape.name),
            },
          ],
        },
        {
          title: "START WITH A DIAMOND",
          items: [
            "Lab Diamond",
            "Natural Diamond",
            "Colored Lab Diamond",
            "Featured Deals",
          ],
          hasToggle: true,
        },
        {
          title: "PRESET ENGAGEMENT RINGS",
          items: [],
          hasToggle: true,
          children: [
            {
              title: "STYLE",
              items: styles.map((style) => style.psc_name),
            },
            {
              title: "SHAPE",
              items: shapes.map((shape) => shape.name),
            },
          ],
        },
        {
          title: "FEATURED",
          items: [
            "Cassatt",
            "Windsor",
            "W Signature",
            "Fully Custom",
            "New Arrivals",
            "Ready To Ship",
            "Easy To Ship",
            "Home Preview",
          ],
        },
      ],
    },
    {
      label: "Wedding",
      submenu: [
        {
          title: "Women’s Bands",
          items: [
            "Anniversary Rings",
            "Eternity Rings",
            "Metal Bonds",
            "Diamond Bonds",
          ],
        },
        { title: "Men’s Bands", items: ["Metal Bonds", "Diamond Bonds"] },
      ],
    },
    {
      label: "Diamonds",
      submenu: [
        {
          title: "Lab Diamonds",
          items: ["Explore Lab Diamonds", "Explore Colored Lab Diamonds"],
        },
        { title: "Fall Sale", items: [] },
        { title: "Clarity Plus™ Diamonds", items: [] },
        { title: "Natural Diamonds", items: [] },
        { title: "Create Your Own Ring", items: [] },
        {
          title: "",
          items: [
            "Lab Diamond",
            "Natural Diamond",
            "Colored Lab Diamond",
            "Featured Deal Diamond",
          ],
        },
        {
          title: "Price",
          items: [
            "Under $2000",
            "$2000 - $4000",
            "$4000 - $6000",
            "$6000 - $8000",
            "$8000+",
          ],
        },
        {
          title: "Carat",
          items: [
            "1 to 2 ct.",
            "2 to 3 ct.",
            "3 to 4 ct.",
            "4 to 6 ct.",
            "6 ct. & Above",
          ],
        },
      ],
    },
    {
      label: "High Jewelry",
      submenu: ["Luxe", "The Reserve"],
    },
    {
      label: "Jewelry",
      submenu: dynamicJewelrySubmenu,
    },
    {
      label: "Collections",
      submenu: [
        {
          title: "Art Deco",
          items: [
            "Wave",
            "W Signature",
            "Fully Custom",
            "New Arrivals",
            "Best Sellers",
            "Ready To Ship",
            "Home Preview",
          ],
        },
      ],
    },
    {
      label: "Gifts",
      submenu: [
        {
          title: "Category",
          items: [
            "Rings",
            "Necklaces",
            "Earrings",
            "Bracelets",
            "Necklaces",
            "Earrings",
            "Bracelets",
          ],
        },
        { title: "Price", items: ["Under $500", "Under $1000", "Under $1500"] },
        { title: "Collections", items: ["Bouquet", "Vine", "Toi Et Moi"] },
      ],
    },
    { label: "Sale" },
  ];

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
    "HIGH JEWELRY": "/page/luxe-collection-engagement-rings-and-wedding-bands",
    JEWELRY: "/jewelry-list",
    COLLECTIONS: "/collections",
    GIFTS: "/collections/jewelry-gifts",
    SALE: "/collections/diamond-jewelry-sale",
  };

  let headerClass = "custom-navbar";

  if (scrolled || hoveredMenu || enter) {
    headerClass += " scrolled";
  }

  if (!isHome) {
    headerClass += " fixed scrolled"; // Always apply fixed on other pages
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

  const [openMenus, setOpenMenus] = useState({ Gifts: false });

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleStartGift = (startType) => {
    setSidebarOpen(false);
    navigate(`/collections/${startType}`);
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
            <button className="appointment-btn" style={{ color: "inherit" }}>
              <span className="icon">📅</span>
              <span className="text">Book an Appointment</span>
            </button>
          </div>

          <div className="nav-logo">
            <img
              src={isHome ? "/images/logo.png" : "/images/logo-23.png"}
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
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

      {hoveredMenu === "WEDDING" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="wedding" closeMegaMenu={() => setHoveredMenu(null)} />
        </div>
      )}

      {hoveredMenu === "DIAMONDS" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="diamond" closeMegaMenu={() => setHoveredMenu(null)} />
        </div>
      )}

      {hoveredMenu === "HIGH JEWELRY" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu
            type="highJewelry"
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

      {hoveredMenu === "COLLECTIONS" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu
            type="collection"
            closeMegaMenu={() => setHoveredMenu(null)}
          />
        </div>
      )}

      {hoveredMenu === "GIFTS" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="gift" closeMegaMenu={() => setHoveredMenu(null)} />
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
      <div className={`sidebar-man ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">CARAT CASA</span>
          <Button
            className="close-btn custom-color-btn"
            variant={undefined}
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </Button>
        </div>

        <div className="mobile-sidebar-menu">
          {menuDatab.map((menu, idx) => {
            const hasSubmenu = menu.submenu !== undefined;
            const routeKey = menu.label.toUpperCase();
            const isOpen = openMenus[menu.label];

            return (
              <div className="mobile-menu-item" key={idx}>
                <div className="mobile-menu-header">
                  <span
                    className="mobile-menu-label"
                    onClick={() => {
                      if (menuRoutes[routeKey]) {
                        navigate(menuRoutes[routeKey]);
                        setSidebarOpen(false);
                      }
                    }}
                  >
                    {menu.label}
                  </span>

                  {hasSubmenu && (
                    <button
                      className="mobile-menu-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu(menu.label);
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {hasSubmenu && isOpen && (
                  <div className="mobile-menu-submenu">
                    {menu.submenu.map((submenuItem, sidx) => {
                      if (
                        submenuItem &&
                        typeof submenuItem === "object" &&
                        submenuItem.items
                      ) {
                        const subIsOpen = openMenus[submenuItem.title];
                        return (
                          <div key={sidx}>
                            <div className="sub-menu-header">
                              {submenuItem.title && (
                                <div className="mobile-menu-label">
                                  {submenuItem.title}
                                </div>
                              )}

                              {submenuItem.hasToggle && (
                                <button
                                  className="mobile-menu-toggle"
                                  onClick={() => toggleMenu(submenuItem.title)}
                                >
                                  {subIsOpen ? "−" : "+"}
                                </button>
                              )}
                            </div>

                            {(!submenuItem.hasToggle || subIsOpen) && (
                              /* submenuItem.items.length > 0 && (
                                <div className="submenu-items">
                                  {submenuItem.items.map((item, iidx) => (
                                    <div
                                      className="mobile-submenu-item"
                                      key={iidx}
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              ) */
                              <>
                                {/* Level 1 items */}
                                {submenuItem.items?.length > 0 && (
                                  <div className="submenu-items">
                                    {submenuItem.items.map((item, iidx) => (
                                      <div
                                        className="mobile-submenu-item"
                                        key={iidx}
                                        onClick={() => {
                                          if (menuRoutes[item.toUpperCase()]) {
                                            navigate(
                                              menuRoutes[item.toUpperCase()]
                                            );
                                            setSidebarOpen(false);
                                          }
                                        }}
                                      >
                                        {item}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* 🔹 Conditional children */}

                                {submenuItem.children?.map((child, cidx) => {
                                  // Always open for STYLE & SHAPE
                                  const alwaysOpen =
                                    child.title === "STYLE" ||
                                    child.title === "SHAPE";
                                  const childIsOpen =
                                    alwaysOpen || openMenus[child.title];

                                  return (
                                    <div key={cidx} className="child-section">
                                      <div className="child-header">
                                        <span className="child-title">
                                          {child.title}
                                        </span>

                                        {/* Show toggle button only if not STYLE or SHAPE */}
                                        {!alwaysOpen &&
                                          child.items?.length > 0 && (
                                            <button
                                              className="mobile-menu-toggle"
                                              onClick={() =>
                                                toggleMenu(child.title)
                                              }
                                            >
                                              {childIsOpen ? "−" : "+"}
                                            </button>
                                          )}
                                      </div>

                                      {/* Always show items if alwaysOpen OR if toggled open */}
                                      {child.items?.length > 0 &&
                                        childIsOpen && (
                                          <div className="submenu-items">
                                            {child.items.map((citem, ciidx) => (
                                              <div
                                                className="mobile-submenu-item"
                                                key={ciidx}
                                              >
                                                {citem}
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                    </div>
                                  );
                                })}
                              </>
                            )}
                          </div>
                        );
                      }

                      // For simple string submenu items
                      return (
                        <div className="mobile-submenu-item" key={sidx}>
                          {submenuItem}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhiteClarityNav;
