import { useState } from "react";
import "./App.css";

function Bonus({side}: {side?: "bonus1" | "bonus2"}) {
    const [Bonus, setBonus] = useState(false);
    if (Bonus) {
        return (
            <div className={`display-container ${side}`}>
                <h1 className="digital-display">●</h1>
                <button onClick={() => setBonus(false)}>BONUS</button>
            </div>
        );
    } else if (!Bonus) {
        return (
            <div className={`display-container ${side}`}>
                <h1 className="digital-display">○</h1>
                <button onClick={() => setBonus(true)}>BONUS</button>
            </div>
        );
    }
}

export default Bonus;