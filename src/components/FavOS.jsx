export const FavOS = ({ value, updateFormData }) => {
  const userFav = (e) => updateFormData("favOS", e.target.value);
  return (
    <div className="favOSForm">
      <p>What is your preferred operating system?</p>
      <form value={value}>

        <input type="radio" id="windows" name="favOS" value="Microsoft's Windows" onChange={userFav} />
        <label for="windows">Microsoft's Windows</label>
        <br />
        <input type="radio" id="macOS" name="favOS" value="Mac's OS" onChange={userFav} />
        <label for="macOS">Mac's OS</label>
        <br /> 
        <input type="radio" id="linux" name="favOS" value="Linux" onChange={userFav} />
        <label for="linux">Linux</label>
        <br />
        <input type="radio" id="otherDev" name="favOS" value="Other" onChange={userFav} />
        <label type="radio" for="otherDev">Other</label>

      </form>
    </div>
  )
}
