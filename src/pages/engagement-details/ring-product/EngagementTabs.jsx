import React, { useState } from "react";
import "../../diamond/index.css";
import { useNavigate } from "react-router-dom";

const steps = [
  { id: 1, label: "CHOOSE A SETTING" },
  { id: 2, label: "CHOOSE A DIAMOND" },
  { id: 3, label: "COMPLETE YOUR RING" },
];

const EngagementTabs = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
    if (stepId === 2) {
      navigate("/diamond");
    }
  };

  return (
    <>
      <div className="diamond-ring-wrapper">
        <div className="step-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${currentStep === step.id ? "active" : ""}`}
              onClick={() => handleStepClick(step.id)}
            >
              <span className="step-number">{step.id}</span>

              <span className="step-divider"></span>

              <span className="step-label">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EngagementTabs;
