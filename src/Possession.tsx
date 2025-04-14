import { useState } from "react";
import "./App.css";

function Possession() {
    const [Possession, setPossession] = useState(true);
    if (Possession) {
        return (
            <div className="display-container possession">
                <h1 className="digital-display">&lt;&ndash;</h1>
                <button onClick={() => setPossession(false)}>POSS</button>
            </div>
        );
    } else if (!Possession) {
        return (
            <div className="display-container possession">
                <h1 className="digital-display">&ndash;&gt;</h1>
                <button onClick={() => setPossession(true)}>POSS</button>
            </div>
        );
    }
}

export default Possession;