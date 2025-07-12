import "./App.css";
import "./styles.css";
import checkmarkIcon from "./checkmark.svg";

const App = () => {
  document
    .querySelector("customCheckbox")
    ?.addEventListener("click", function () {
      const nativeCheckBox = document.querySelector("nativeCheckbox");
      nativeCheckBox.checked = !nativeCheckBox.checked;
    });

  return (
    <label className="checkboxContainer">
      <input type="checkbox" className="hiddenCheckbox" id="nativeCheckbox" />
      <span className={"customCheckbox"} id="customCheckbox">
        <img src={checkmarkIcon} alt="checkmark" className="checkmark" />
      </span>
    </label>
  );
};

export default App;
