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
      luxe: "/luxe",
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

  const handleShapeClick = (shape) => {
    const slug = "shapes";
    const shapeSlug = shape.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menushape", shapeSlug);

    navigate({
      pathname: `/engagement-rings/${slug}`,
      search: params.toString(),
    });
  };

  const handleStyleClick = (style) => {
    const slug = "style";
    const styleSlug = style.psc_name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menustyle", styleSlug);
    navigate({
      pathname: `/engagement-rings/${slug}`,
      search: params.toString(),
    });
  };

  const handleItemClick = (item) => {
    const slug = "";
    const itemSlug = item.label.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    // params.set("status", itemSlug);
    if (item.label.toLowerCase() === "ready to ship") {
      params.set("ready_to_ship", "true");
    }
    navigate({
      pathname: slug ? `/engagement-rings/${slug}` : `/engagement-rings`,
      search: params.toString(),
    });
  };

  const handleDiamondClick = (item) => {
    const itemSlug = item.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menudiamond", itemSlug);
    navigate({
      pathname:`/diamond`,
      search: params.toString(),
    });
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
          handleItemClick={handleItemClick}
          handleDiamondClick={handleDiamondClick}          
          navigate={navigate}
          slugify={slugify}
        />
      )}
    </div>
  );
};

export default MegaMenu;
