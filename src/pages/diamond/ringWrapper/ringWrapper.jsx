import React, { useState } from "react";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";

const RingWrapper = ({ ringCartItem }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedDiamondParam = searchParams.get("selecteddiamond");

  const defaultSteps = [
    { id: 1, label: "CHOOSE A DIAMOND" },
    { id: 2, label: "CHOOSE A SETTING" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  // Alternate step order (2-1-3)
  const diamondSteps = [
    { id: 1, label: "CHOOSE A SETTING" },
    { id: 2, label: "CHOOSE A DIAMOND" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  // Determine which step order to use
  const isDiamondDetailsPage =
    location.pathname.startsWith("/diamond-details/");

  const steps =
    isDiamondDetailsPage || selectedDiamondParam ? diamondSteps : defaultSteps;

  // Set initial active step
  const [currentStep, setCurrentStep] = useState(() => {
    if (isDiamondDetailsPage) {
      return 2; // "CHOOSE A DIAMOND" active on diamond details
    }
    return selectedDiamondParam ? 2 : 1;
  });

  const handleStepClick = (step) => {
    setCurrentStep(step.id);
    if (step.label === "CHOOSE A SETTING") {
      navigate("/engagement-rings");
    }
  };

  return (
    <>
      <div className="diamond-ring-wrapper">
        <div className="step-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${currentStep === step.id ? "active" : ""} ${
                step.id === 3 ? "disabled" : ""
              }`}
              onClick={() => step.id !== 3 && handleStepClick(step)} // 🚫 Prevent click for step 3
            >
              <div>
                <span className="step-number">{step.id}</span>
                <span className="step-divider"></span>
                <span className="step-label">{step.label}</span>
              </div>
              <div>
                {steps === diamondSteps &&
                  index === 0 &&
                  ringCartItem?.image && (
                    <div className="ring-preview">
                      <img
                        src={ringCartItem.image}
                        alt="Selected Ring"
                        className="ring-preview-img"
                      />
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RingWrapper;
