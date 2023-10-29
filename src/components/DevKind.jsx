export const DevKind = ({ updateFormData, value }) => {
  const chooseDev = (e) => updateFormData("devKind", e.target.value);
  return (
    <div className="kind-of-dev-form">
      <label>What kind of developer are you?</label>
      <select value={value} onChange={chooseDev}>
        <option>Select your dev</option>
        <option value="Frond-end Dev">Frond-end dev</option>
        <option value="Back-end Dev">Back-end dev</option>
        <option value="Full-stack Dev">Full-stack dev</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}
