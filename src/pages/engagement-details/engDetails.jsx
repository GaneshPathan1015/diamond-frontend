import React from "react";
// import RingWrapper from "../diamond/ringWrapper/ringWrapper";
import RingProductView from "./ring-product/RingProductView";
import EngagementTabs from "./ring-product/EngagementTabs";

const EngagementDetails = () => {
  return (
    <>
      {<EngagementTabs />}
      {<RingProductView />}
    </>
  );
};

export default EngagementDetails;
