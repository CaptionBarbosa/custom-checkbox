import "./App.css";
import "./styles.css";

const App = () => {
  const handleCheckboxClick = () => {
    const nativeCheckBox = document.getElementById("nativeCheckbox");
    nativeCheckBox.checked = !nativeCheckBox.checked;
  };

  return (
    <div className="App">
      <input type="checkbox" className={["visually-hidden-checkbox"]} id="nativeCheckbox" />
      <div className={"customCheckbox"} onClick={() => handleCheckboxClick()} />
    </div>
  );
};

export default App;
