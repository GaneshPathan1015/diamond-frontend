import React from "react";

const EngagementMenu = ({
  styles = [],
  shapes = [],
  loadingEngagement = false,
  hoveredOption,
  setHoveredOption,
  closeMegaMenu,
  handleStartEngagement,
  handleShapeClick,
  handleStyleClick,
  navigate,
  slugify,
}) => {
  return (
    <div
      className="jwl-mega-menu-inner container"
      onMouseLeave={() => setHoveredOption(null)}
    >
      {/* Engagement */}
      <div className="jwl-mega-col">
        <h6 className="jwl-menu-title">ENGAGEMENT</h6>
        <ul className="jwl-list">
          <li
            onMouseEnter={() => setHoveredOption("setting")}
            className="clickable"
            style={{ fontWeight: hoveredOption === "setting" ? 600 : 400 }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleStartEngagement("rings");
              }}
            >
              Start With A Setting &gt;
            </a>
          </li>
          <li
            onMouseEnter={() => setHoveredOption("diamond")}
            style={{ fontWeight: hoveredOption === "diamond" ? 600 : 400 }}
          >
            <span>Start With A Diamond &gt;</span>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/preset-engagement-rings");
                closeMegaMenu();
              }}
            >
              Preset Engagement Rings &gt;
            </a>
          </li>
        </ul>
      </div>

      {hoveredOption === "setting" && (
        <>
          <div className="jwl-mega-col">
            <h6 className="jwl-menu-title">STYLE</h6>
            <ul className="jwl-list">
              {styles.map((style) => (
                <li key={style.psc_id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleStyleClick(style);
                      closeMegaMenu();
                    }}
                  >
                    {style.psc_name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="jwl-mega-col">
            <h6 className="jwl-menu-title">SHAPE</h6>
            <ul className="jwl-list">
              {shapes.map((shape) => (
                <li key={shape.id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleShapeClick(shape);
                      closeMegaMenu();
                    }}
                  >
                    {shape.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {hoveredOption === "diamond" && (
        <div className="jwl-mega-col">
          <ul className="jwl-list">
            {[
              { name: "Lab Diamond", path: "/lab-diamonds" },
              { name: "Natural Diamond", path: "/natural-diamonds" },
              { name: "Colored Lab Diamond", path: "/colored-lab-diamonds" },
              { name: "Featured Deals", path: "/featured-deals" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMegaMenu();
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="jwl-mega-col">
        <h6 className="jwl-menu-title">FEATURED</h6>
        <ul className="jwl-list">
          {[
            { label: "Wave", path: "/engagement-wave" },
            { label: "W Signature", path: "/engagement-signature" },
            { label: "Fully Custom", path: "/fully-custom" },
            { label: "New Arrivals", path: "/new-arrivals" },
            { label: "Best Sellers", path: "/best-sellers" },
            { label: "Ready To Ship", path: "/ready-to-ship" },
            { label: "Home Preview", path: "/home-preview" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeMegaMenu();
                  navigate(item.path);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="jwl-mega-col jwl-image-col">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/2e800afe873a48608dec71f9c26b6c98.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="jwl-mega-video"
        ></video>
        <div className="jwl-caption">
          <h6>Discover Our Best Sellers</h6>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeMegaMenu();
              navigate("/engagement-classics");
            }}
            style={{ color: "blue" }}
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default EngagementMenu;
