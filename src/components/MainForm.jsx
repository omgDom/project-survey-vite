import { useState } from "react";
import { Name } from "./Name"
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
    
      const [currentStep, setCurrentStep] = useState(1)
    
      const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]: value}));
      };
    
      const nextStep = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1)
      }
    
      const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
      }
    
      const submitForm = () => {
        console.log(formData)
        const formattedData = `
        Name: ${formData.name}
        Age: ${formData.age}
        Favorite Operating System: ${formData.favOS}
        The kind of developer you are: ${formData.devKind}
        Your motivation to become a dev was: ${formData.motivation}
        `;
        alert(formattedData);
      };

      const progressBarWidth = (currentStep - 1) * 25;

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
      </div>

      <h1>Project Survey</h1>
      <h4>by Dmitry Barinov</h4>

      <div className="card">
        {currentStep === 1 && <Name value={formData.name} updateFormData={updateFormData}/>}
        {currentStep === 2 && <Age value={formData.age} updateFormData={updateFormData}/>}
        {currentStep === 3 && <FavOS value={formData.favOS} updateFormData={updateFormData}/>}
        {currentStep === 4 && <DevKind value={formData.devKind} updateFormData={updateFormData}/>}
        {currentStep === 5 && <Motivation value={formData.motivation} updateFormData={updateFormData}/>}
      </div>

      <div className="form-btn">
          {currentStep > 1 && <button className="btn" onClick={prevStep}>Back</button>}
          {currentStep < 5 ? (<button className="btn" onClick={nextStep}>Next</button>) : 
          (<button className="submit-btn" onClick={submitForm}>Submit</button>)}
      </div>
    </div>

  );
};

