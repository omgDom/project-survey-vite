const customStyles = {
  "--color": "rgba(240, 240, 240)",
  "--background": "rgba(16, 20, 31)",
};

export const Age = ({ value, updateFormData }) => {
  const ageInput = (e) => {
    const inputValue = e.target.value;
    const ageRegex = /^(?:[0-9]|[1-9][0-9])?$/;

    if (ageRegex.test(inputValue)) {
      updateFormData("age", inputValue);
    }
  };

  return (
    <div className="ageForm" style={customStyles}>
      <input type="text" required="required" value={value} onChange={ageInput} />
      <span>Age</span>
      <i></i>
    </div>
  );
};