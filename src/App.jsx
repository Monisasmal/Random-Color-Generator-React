import  { useEffect, useState } from 'react';
import ColorBox from './ColorBox';
import './App.css';

const getRandomHexColor = () => {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
};

const App = () => {
  const [count, setCount] = useState(6);
  const [colors, setColors] = useState([]);

  useEffect(() =>{
    generatePalette()
  },[]);

  const generatePalette = () => {
    const newColors = Array.from({ length: count }, () => getRandomHexColor());
    setColors(newColors);

  };

  return (
    <div className="app">
      <h1>🙂Color Palette Generator😊</h1>
      <div className="controls">
        <label>
          Number of Colors: 
          <input
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </label>
        <button onClick={generatePalette}>Generate Colors</button>
      </div>

      <div className="palette">
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default App;
