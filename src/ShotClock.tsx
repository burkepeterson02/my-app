import { useState, useEffect } from "react";
import "./App.css";

function formatSeconds(seconds: number) {
  return String(seconds).padStart(2, "0"); // Ensures two-digit format (e.g., 00, 05, 12)
}

function ShotClock() {; // Default shot clock duration
  const [time, setTime] = useState(30); // Default shot clock duration
  const [isRunning, setIsRunning] = useState(false);
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(formatSeconds(time));

  useEffect(() => {
    if (!isRunning || time <= 0) return;
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time, isRunning]);

  const handleInputBlur = () => {
    const secs = Number(inputValue);
    if (isNaN(secs) || secs < 0 || secs > 99) {
      setInputValue(formatSeconds(time)); // Revert if invalid
    } else {
      setTime(secs);
    }
    setEditing(false);
  };

  return (
    <div className="display-container shotclock">
      {editing ? (
        <input
          type="text"
          className="digital-display"
          value={inputValue}
          onChange={(e) => /^\d{0,2}$/.test(e.target.value) && setInputValue(e.target.value)}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <h1 className="digital-display timer-text" onClick={() => setEditing(true)}>
          {formatSeconds(time)}
        </h1>
      )}

      <div className="timer-buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "⏸" : "⏵"}
        </button>
        <button onClick={() => { setTime(30); setIsRunning(false); }}>
          ⏹
        </button>
      </div>
    </div>
  );
}

export default ShotClock;
