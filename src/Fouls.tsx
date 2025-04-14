import './App.css'
import { useState } from 'react'

  
export default function Fouls({side} : {side?: "foul1" | "foul2"}) {
    const [foulCount, setFoulCount] = useState(0);

    return (
      <div className={`display-container ${side}`}>
        <h2>FOULS</h2>
        <h1 className="digital-display">{foulCount}</h1>
        <div className="display-buttons">
            {[1, -1].map((value) => (
            <button key={value} onClick={() => setFoulCount((prevCount) => prevCount + value)}>
                {value > 0 ? `+${value}` : value}
            </button>
            ))}
        </div>
      </div>
    );
};