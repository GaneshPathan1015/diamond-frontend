import React, { useState } from "react";
import "./collectionMenu.css";

const staticCollectionRoutes = {
  "w signature": "/page",
};

// Map each label to its preview image
const previewImages = {
  "Art Deco": "/images/artDeco-nav-img.webp",
  Cassatt: "/images/collectionmenu/casata.webp",
  "W Signature": "/images/collectionmenu/wsignature-nav-img.webp",
  Fulton: "/images/collectionmenu/Fulton-nav-img.webp",
  Seraphine: "/images/collectionmenu/The_Seraphine.webp",
  Windsor: "/images/collectionmenu/windsor.webp",
  "The Bond": "/images/collectionmenu/bond-nav-img.webp",
  // "Toi et Moi": "/images/collectionmenu/toiETMoi-nav-img.webp",
  Bouquet: "/images/collectionmenu/bouquet-nav-img.webp",
  Vine: "/images/collectionmenu/vine-nav-img.webp",
};

const CollectionMenu = ({ closeMegaMenu, navigate }) => {
  const featuredItems = [
    { label: "Art Deco", slug: "art-deco" },
    { label: "Cassatt", slug: "cassatt" },
    { label: "W Signature", slug: "the-w-signature-solitaire-engagement-rings" },
    { label: "Fulton", slug: "the-fulton-collection" },
    { label: "Seraphine", slug: "the-seraphine-collection" },
    { label: "Windsor", slug: "the-windsor-collection" },
    { label: "The Bond", slug: "the-bond-collection" },
    // { label: "Toi et Moi", slug: "wave-collection" },
    { label: "Bouquet", slug: "bouquet" },
    { label: "Vine", slug: "vine-collection" },
  ];

  // Use localStorage to persist last hovered item
  const [hoveredItem, setHoveredItem] = useState(() => {
    return localStorage.getItem("lastHovered") || featuredItems[0].label;
  });

  const handleMouseEnter = (label) => {
    setHoveredItem(label);
    localStorage.setItem("lastHovered", label);
  };

  const handleCollectionClick = (item) => {
    const route = staticCollectionRoutes[item.label.toLowerCase()];
    if (route) {
      navigate(`${route}/${item.slug}`);
    } else {
      navigate(`/collections/${item.slug}`);
    }
    closeMegaMenu();
  };

  return (
    <div className="jwl-mega-menu-inner">
      <div className="collection-container">
        {/* Left Menu */}
        <div className="menu-left">
          <ul>
            {featuredItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCollectionClick(item);
                  }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
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
            src={previewImages[hoveredItem]}
            alt={hoveredItem}
            className="preview-image"
          />
          <div className="caption">
            <h3 className="collection-caption">{hoveredItem}</h3>
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
    </div>
  );
};

export default CollectionMenu;
