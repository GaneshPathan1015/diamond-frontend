import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";             // Transparent header (home page)
import SecondHeader from "./secondHeader"; // White header with Mega Menu

const HeaderWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if we are on home page
  const [showSecondHeader, setShowSecondHeader] = useState(false);

  const handleMegaHover = (status) => {
    // This is called from Header/SecondHeader when Mega Menu is hovered
    setShowSecondHeader(status);
  };

  if (!isHomePage) {
    // Non-home pages always show SecondHeader
    return <SecondHeader />;
  }

  return showSecondHeader ? (
    <SecondHeader onHoverChange={handleMegaHover} />
  ) : (
    <Header onHoverChange={handleMegaHover} />
  );
};

export default HeaderWrapper;
