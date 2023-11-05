import React, { useState } from "react";
import { Name } from "./Name";
import { Age } from "./Age";
import { FavOS } from "./FavOS";
import { DevKind } from "./DevKind";
import { Motivation } from "./Motivation";

export const MainForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    favOS: "",
    devKind: "",
    motivation: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const restartForm = () => {
    setFormData({
      name: "",
      age: "",
      favOS: "",
      devKind: "",
      motivation: "",
    });
    setCurrentStep(1);
    setSubmitted(false);
  };

  const progressBarWidth = (currentStep - 1) * 25;

  return (
    <div>
      <div className="progress-container" style={{ display: submitted ? "none" : "block" }}>
        <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
      </div>

      <h1>Project Survey</h1>
      <h4>by Dmitry Barinov</h4>

      {submitted ? (
        <div className="summary">
          <h2>Summary</h2>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Favorite Operating System: {formData.favOS}</p>
          <p>You are a: {formData.devKind}</p>
          <p>Motivation to become a developer: {formData.motivation}</p>
          <button className="restartBtn" onClick={restartForm}>
            Restart
          </button>
        </div>
      ) : (
        <div className="card">
          {currentStep === 1 && <Name value={formData.name} updateFormData={updateFormData} />}
          {currentStep === 2 && <Age value={formData.age} updateFormData={updateFormData} />}
          {currentStep === 3 && <FavOS value={formData.favOS} updateFormData={updateFormData} />}
          {currentStep === 4 && <DevKind value={formData.devKind} updateFormData={updateFormData} />}
          {currentStep === 5 && (<Motivation value={formData.motivation} updateFormData={updateFormData} />)}
        </div>
      )}

      <div className="form-btn">
        {currentStep > 1 && !submitted && (
          <button className="btn" onClick={prevStep}>
            Back
          </button>
        )}
        {currentStep < 5 && !submitted && (
          <button className="btn" onClick={nextStep}>
            Next
          </button>
        )}
        {!submitted && currentStep === 5 && (
          <button className="submitBtn" onClick={() => setSubmitted(true)}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};