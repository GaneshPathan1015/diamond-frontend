import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMegaMenu } from "../../context/MegaMenuContext";
import JewelryMenu from "./JewelryMenu";
import EngagementMenu from "./EngagementMenu";
import "./megaMenu.css";

const slugify = (text = "") =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

const MegaMenu = ({ type = "engagement", closeMegaMenu = () => {} }) => {
  const {
    categoryMap = {},
    mainCategories = [],
    loadingJewelry = false,
    collections = [],
    styles = [],
    shapes = [],
    loadingEngagement = false,
  } = useMegaMenu() || {};

  const navigate = useNavigate();
  const [hoveredOption, setHoveredOption] = useState("diamond");

  const handleClick = (main, sub = null) => {
    const mainParam = `${slugify(main.name)}-${main.id}`;
    const subParam = sub ? `${slugify(sub.name)}-${sub.id}` : null;

    const params = new URLSearchParams();
    params.set("category", mainParam);
    if (subParam) params.set("subcategory", subParam);

    closeMegaMenu();
    navigate(`/jewelry-list?${params.toString()}`);
  };

 const handleCollectionClick = (collection) => {
  const rawName = collection.name || "";
  const normalizedName = rawName.trim().toLowerCase();

  // Define exact static collection routes
  const staticCollectionRoutes = {
    "luxe": "/luxe",
    "the reserve": "/reserve",
    "w signature": "/signature",
  };

  // Check for static route
  if (staticCollectionRoutes[normalizedName]) {
    closeMegaMenu();
    navigate(staticCollectionRoutes[normalizedName]);
  } else {
    // Fallback: dynamic logic
    const slug = `${slugify(rawName)}-${collection.id}`;
    const params = new URLSearchParams();
    params.set("menucollection", slug);

    closeMegaMenu();
    navigate(`/jewelry-list?${params.toString()}`);
  }
};

  const handleStartEngagement = (startType) => {
    closeMegaMenu();
    navigate(`/engagement-rings/${startType}`);
  };

  // const handleShapeClick = (shape) => {
  //   const slug = shape.name.toLowerCase().replace(/\s+/g, "-");
  //   navigate(`/engagement-rings/${slug}`);
  // };

  const handleShapeClick = (shape) => {
    const slug = "shapes"
    const shapeSlug = shape.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menushape", shapeSlug);

    navigate({
      pathname: `/engagement-rings/${slug}`,
      search: params.toString(),
    });
  };

  const handleStyleClick = (style) => {
    const slug = style.psc_name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/engagement-rings/${slug}`);
  };

  return (
    <div className="jwl-mega-menu-dropdown">
      {type === "jewelry" && (
        <JewelryMenu
          mainCategories={mainCategories}
          categoryMap={categoryMap}
          collections={collections}
          loadingJewelry={loadingJewelry}
          handleClick={handleClick}
          handleCollectionClick={handleCollectionClick}
          closeMegaMenu={closeMegaMenu}
          navigate={navigate}
        />
      )}

      {type === "engagement" && (
        <EngagementMenu
          styles={styles}
          shapes={shapes}
          loadingEngagement={loadingEngagement}
          hoveredOption={hoveredOption}
          setHoveredOption={setHoveredOption}
          closeMegaMenu={closeMegaMenu}
          handleStartEngagement={handleStartEngagement}
          handleShapeClick={handleShapeClick}
          handleStyleClick={handleStyleClick}
          navigate={navigate}
          slugify={slugify}
        />
      )}
    </div>
  );
};

export default MegaMenu;
