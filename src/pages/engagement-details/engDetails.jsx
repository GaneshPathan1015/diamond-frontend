import React from "react";
import RingProductView from "./ring-product/RingProductView";
import EngagementTabs from "./ring-product/EngagementTabs";
import { useLocation } from "react-router-dom";

const EngagementDetails = () => {
  const location = useLocation();
  const diamond = location.state?.diamond;

  return (
    <>
      {<EngagementTabs diamond={diamond} />}
      {<RingProductView diamond={diamond} />}
    </>
  );
};

export default EngagementDetails;
