import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

function Stopwatch() {
  const [movingTime, setmovingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setmovingTime((prevmovingTime) => prevmovingTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setmovingTime(0);
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();

    return (
      <>
        {hours > 0 && (
          <>
            <span className="hour">{hours}h</span>{" "}
            <span className="minutes">{minutes}m</span>{" "}
          </>
        )}
        {(minutes > 0 || hours > 0) && (
          <>
            <span className="minutes">{minutes}m</span>{" "}
          </>
        )}

        {(seconds > 0 || minutes > 0 || hours > 0) && (
          <>
            {/* <span className="seconds">{seconds}s</span>{" "} */}
          </>
        )}
        <span className="seconds">{seconds}s</span>{" "}
        <span>{milliseconds}</span>
      </>
    );
  };

  return (
    <div className="stopwatch">
      <div className="display">
        <h1>{formatTime(movingTime)}</h1>
      </div>
      <div className="btns">
        <span>
          <button className="start" onClick={startStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </span>
      </div>
    </div>
  );
}

export default Stopwatch;
