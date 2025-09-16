import React from "react";
import "./highJewelryMenu.css";

const HighJewelryMenu = ({ setHoveredOption, navigate }) => {
  const collections = [
    {
      name: "Luxe",
      image:
        "/images/luxeGroup.webp", // replace with actual image URL
      route: "/luxe",
    },
    {
      name: "The Reserve",
      image:
        "/images/Reserve_dropdown.webp", // replace with actual image URL
      route: "/reserve",
    },
  ];

  return (
    <div
      className="collection-menu"
      onMouseLeave={() => setHoveredOption(null)}
    >
      <div className="collection-grid">
        {collections.map((col, i) => (
          <div
            key={i}
            className="collection-card"
            onClick={() => navigate(col.route)}
          >
            <img src={col.image} alt={col.name} className="collection-image" />
            <p className="collection-label">{col.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighJewelryMenu;
