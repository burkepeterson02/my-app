import { useState, useEffect } from "react";
import "./App.css";

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function CountdownTimer() {
  const [time, setTime] = useState(20 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(formatTime(time));

  useEffect(() => {
    if (!isRunning || time <= 0) return;
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time, isRunning]);

  const handleInputBlur = () => {
    const [mins, secs] = inputValue.split(":").map(Number);
    if (isNaN(mins) || isNaN(secs) || mins > 99 || secs > 59) {
      setInputValue(formatTime(time)); // Revert if invalid
    } else {
      const newTime = mins * 60 + secs;
      setTime(newTime);
    }
    setEditing(false);
  };

  return (
    <div className="display-container clock">
      {editing ? (
        <input
          type="text"
          className="digital-display"
          value={inputValue}
          onChange={(e) => /^\d{0,2}:\d{0,2}$/.test(e.target.value) && setInputValue(e.target.value)}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <h1 className="digital-display timer-text" onClick={() => setEditing(true)}>
          {formatTime(time)}
        </h1>
      )}

      <div className="timer-buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "⏸" : "⏵"}
        </button>
        <button onClick={() => { setTime(20 * 60); setIsRunning(false); }}>
          ⏹
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
