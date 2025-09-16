import React from "react";
import "./collectionMenu.css";

const staticCollectionRoutes = {
  "w signature": "/signature",
};

const CollectionMenu = ({
  setHoveredOption,
  closeMegaMenu,
  navigate,
  slugify,
}) => {
  const featuredItems = [
    { label: "Wave" },
    { label: "W Signature" },
    { label: "Fully Custom" },
    { label: "New Arrivals" },
    { label: "Best Sellers" },
    { label: "Ready To Ship" },
    { label: "Home Preview" },
  ];

  const handleCollectionClick = (item) => {
    const route = staticCollectionRoutes[item.label.toLowerCase()];
    if (route) {
      navigate(route);
    } else {
       navigate(item.label);  // Make sure you have a 404 route
    }
  };

  return (
    <div
      className=" collection-menu"
      onMouseLeave={() => setHoveredOption(null)}
    >
      {/* Left Menu */}
      <div className="menu-left">
        <h3>Art Deco</h3>
        <ul>
          {featuredItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCollectionClick(item);
                  closeMegaMenu();
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Preview */}
      <div className="menu-right">
        <img
          src="/images/artDeco-nav-img.webp"
          alt="Preview"
          className="preview-image"
        />
        <div className="caption">
          <h4>Discover Our Best Sellers</h4>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeMegaMenu();
              navigate("/engagement-classics");
            }}
            className="explore-link"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollectionMenu;
