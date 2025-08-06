  import React from 'react';
  import { useNavigate, useLocation, useParams } from 'react-router-dom';
  import "../index.css";

  const steps = [
    { id: 1, label: "CHOOSE A DIAMOND", path: "diamond-details" },
    { id: 2, label: "CHOOSE A SETTING", path: "engagment-details" },
    { id: 3, label: "COMPLETE YOUR RING", path: "jewellary-details" },
  ];

  const RingWrapper = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const getActiveStep = () => {
      if (location.pathname.includes('/diamond-details')) return 1;
      if (location.pathname.includes('/engagment-details')) return 2;
      if (location.pathname.includes('/jewellary-details')) return 3;
      return 1;
    };

    const currentStep = getActiveStep();

 const handleStepClick = (step) => {
  const selectedDiamond = JSON.parse(localStorage.getItem('selectedDiamond'));

  if (step.id === 1) {
    // CHOOSE A DIAMOND
    if (selectedDiamond?.certified_no) {
      navigate(`/${step.path}/${selectedDiamond.certified_no}`);
    } else {
      alert("Please select a diamond first to proceed.");
    }
  } else {
    // CHOOSE A SETTING or COMPLETE YOUR RING
    if (id) {
      navigate(`/${step.path}/${id}`);
    } else {
      alert("No diamond selected. Please choose a diamond first.");
    }
  }
};

    return (
      <div className="diamond-ring-wrapper">
        <h2 className="title">Create Your Diamond Ring</h2>
        <div className="step-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${currentStep === step.id ? "active" : ""}`}
              onClick={() => handleStepClick(step)}
            >
              <span className="step-number">{step.id}</span>
              <span className="step-label">{step.label}</span>
              {index < steps.length - 1 && (
                <span className="step-divider">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default RingWrapper;
