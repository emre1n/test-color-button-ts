import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const colorChangeHandler = () => setButtonColor(newButtonColor);

  return (
    <>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={colorChangeHandler}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </>
  );
}

export default App;
