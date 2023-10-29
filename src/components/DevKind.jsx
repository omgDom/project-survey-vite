export const DevKind = ({ updateFormData, value }) => {
  const chooseDev = (e) => updateFormData("devKind", e.target.value);
  return (
    <div className="kind-of-dev-form">
      <label>What kind of developer are you?</label>
      <select value={value} onChange={chooseDev}>
        <option>Select</option>
        <option value="Frond-end Dev">Frond-end Dev</option>
        <option value="Back-end Dev">Back-end Dev</option>
        <option value="Full-stack Dev">Full-stack Dev</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}
