import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const colorChangeHandler = () => setButtonColor(newButtonColor);
  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDisabled(e.target.checked);

  return (
    <>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={colorChangeHandler}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={checkboxChangeHandler}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
