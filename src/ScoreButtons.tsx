import './App.css'
import { useState } from 'react'

  
export default function ScoreButtons({side} : {side?: "score1" | "score2"}) {
    const [score, setScore] = useState(0);

    return (
      <div className={`display-container ${side}`}>
        <h1 className="digital-display score">{score}</h1>
        <div className="display-buttons">
            {[1, 2, 3, -1].map((value) => (
            <button key={value} onClick={() => setScore((prevScore) => prevScore + value)}>
                {value > 0 ? `+${value}` : value}
            </button>
            ))}
        </div>
      </div>
    );
};
