const customStyles = {
  "--color": "rgba(240, 240, 240)",
  "--background": "rgba(16, 20, 31)",
};

export const Name = ({ value, updateFormData }) => {
  const userName = (e) => {
    const inputValue = e.target.value;
    const nameRegex = /^[A-Za-z\s]*$/;

    if (nameRegex.test(inputValue)) {
      updateFormData("name", inputValue);
    }
  };

  return (
    <div className="nameForm" style={customStyles}>
      <input type="text" required="required" value={value} onChange={userName} />
      <span>Name</span>
      <i></i>
    </div>
  );
};