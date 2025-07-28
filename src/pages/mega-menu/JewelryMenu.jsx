import React from "react";

const JewelryMenu = ({
  mainCategories = [],
  categoryMap = {},
  collections = [],
  loadingJewelry = false,
  handleClick,
  handleCollectionClick,
  closeMegaMenu,
  navigate,
}) => {
  return (
    <div className="jwl-mega-menu-inner container">
      {loadingJewelry
        ? [...Array(4)].map((_, i) => (
            <div className="jwl-mega-col placeholder-glow" key={i}>
              <h6
                className="placeholder"
                style={{ width: "100px", height: "16px" }}
              ></h6>
              <ul className="jwl-list">
                {[...Array(5)].map((_, j) => (
                  <li key={j}>
                    <div
                      className="placeholder"
                      style={{ width: "80%", height: "14px" }}
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        : mainCategories.map((main) => (
            <div className="jwl-mega-col" key={main.id}>
              <h6 className="jwl-menu-title">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(main);
                  }}
                >
                  {main.name}
                </a>
              </h6>
              <ul className="jwl-list">
                {(categoryMap[main.name] || []).map((sub) => (
                  <li key={sub.id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(main, sub);
                      }}
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
                <li className="jwl-shop-all">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(main);
                    }}
                  >
                    SHOP ALL
                  </a>
                </li>
              </ul>
            </div>
          ))}

      {/* Collections */}
      <div className="jwl-mega-col">
        <h6 className="jwl-menu-title">COLLECTIONS</h6>
        <ul className="jwl-list">
          {Array.isArray(collections) &&
            collections.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCollectionClick(item);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </div>

      {/* Image */}
      <div className="jwl-mega-col jwl-image-col">
        <img src="/images/jewelry_dropdown.jpg" alt="Stackable Earrings" />
        <div className="jwl-caption">
          <h6>Stackable Earrings</h6>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeMegaMenu();
              navigate("/stackable-earrings");
            }}
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default JewelryMenu;
