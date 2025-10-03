import React from "react";
import "./giftMenu.css";

const GiftMenu = ({ handleStartGift }) => {
  // Menu data definition
  const menuData = [
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

  return (
    <section className="gift-menu-section container-fluid py-2">
      <div className="row justify-content-center">
        {/* Centered col-9 */}
        <div className="col-12 col-lg-9">
          <div className="row">
            {/* Left Section (Text) - 6 cols */}
            <div className="col-lg-7 col-md-12 d-flex">
              <div className="row w-100">
                {menuData.map((menu, i) => (
                  <div key={i} className="col-6 col-md-3">
                    <h6 className="menu-title">{menu.title}</h6>
                    <ul className="menu-list">
                      {menu.items.map((item, idx) => (
                        <li
                          key={idx}
                          className={item.className || ""}
                          onClick={() => handleStartGift(item.slug)}
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section (Image + Text) - 3 cols */}
            <div className="col-lg-3 col-md-12 text-center gift-image-box">
              <img
                src="/images/best-gifts.webp"
                alt="Best Selling Gifts"
                className="img-fluid mb-3"
              />
              <h5 className="fw-bold">Best-Selling Gifts</h5>
              <a href="#" className="shop-now-link">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GiftMenu;