export const Motivation = ({ value, updateFormData }) => {
  const userMot = (e) => updateFormData("motivation", e.target.value);
  return (
    <div className="motivationForm">
      <p>What <b>motivated</b> you to become a developer?</p>
        <form value={value}>

          <input type="radio" id="money" name="motivation" value="Money, money, money...(Always sunny in the rich man's world...lalala)." onChange={userMot} />
          <label for="money">
            Money, money, money...(Always sunny in the rich man's world...lalala).
          </label>
          <br />
          <input type="radio" id="challenging" name="motivation" value="It seems...challenging. Plus, I can make good money."onChange={userMot} />
          <label for="challenging">
            It seems...challenging. Plus, I can make good money.
          </label>
          <br />
          <input type="radio" id="shapeFuture" name="motivation" value="I want to shape the future and maybe I'll manage to get well paid." onChange={userMot} />
          <label for="shapeFuture">
            I want to shape the future and maybe I'll manage to get well paid.
          </label>
          <br />
          <input type="radio" id="codeLove" name="motivation" value="What do you mean? What else could I become? Code is love, code is life." onChange={userMot} />
          <label for="codeLove">
            What do you mean? What else could I become? Code is love, code is life.
          </label>
        </form>
    </div>
  )
}
