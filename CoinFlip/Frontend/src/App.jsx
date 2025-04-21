import { useState } from 'react';
import './App.css';

function App() {
  const [coinValue, setCoinValue] = useState("Spin N win");
  const [result, setResult] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  function handleGuess(userGuess) {
    const choices = ['Heads', 'Tails'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    setIsAnimating(true); 
    setCoinValue(randomChoice);
    setResult(userGuess === randomChoice ? "🎉 You Won !" : "😢 Better Luck Next time !");

    setTimeout(() => {
      setIsAnimating(false);
      setCoinValue("Spin N win");
    }, 5000);
  }

  return (
    <>
      <div className='Main-container'>
           <div className="coin-container">
        <div className={`coin ${coinValue.toLowerCase()} ${isAnimating ? 'animate' : ''}`}>
          {coinValue && <span>{coinValue}</span>}
        </div>
      </div>

      <div className='Buttons'>
        <button onClick={() => handleGuess("Heads")} className='left'>Heads</button>
        <button onClick={() => handleGuess("Tails")} className='right'>Tails</button>
      </div>

      <input className='displaywindow' type="text" value={coinValue} readOnly />
      <p>{result}</p>
      </div>
    </>
  );
}

export default App;
