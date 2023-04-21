import React, { useEffect, useState } from "react";
import "../Styles/Home.css";

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [start, setStart] = useState(false);
  const [muted, setMuted] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioElement = new Audio("../Assets/alarm.mp3");
    setAudio(audioElement);
  }, []);

  const refreshPage = () => {
    setMinutes(2);
    setSeconds(59);
    setStart(false);
  };

  const stopStart = () => {
    setStart(!start);
  };

  useEffect(() => {
    let getData = null;
    if (!start) {
      getData = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(getData);
            if (audio && !muted) {
              audio.play();
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => {
      clearInterval(getData);
    };
  }, [minutes, seconds, start, audio, muted]);
  

  const toggleMute = () => {
    setMuted(!muted);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div className="timer">
      <div className="display">
        <h1>
          <span className="minutes">{minutes}</span>m
          <span className="seconds">{seconds}</span>s
        </h1>
      </div>
      <div className="btns">
        <span>
          <button className="start" onClick={stopStart}>
            {!start ? "STOP" : "START"}
          </button>
          <button className="reset" onClick={refreshPage}>
            Reset
          </button>
          <span className="mute" onClick={toggleMute}>
            {!muted ? (
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAACrC2ehAAAACHRSTlMA2IAX/16rO6dkyYQAAACdSURBVHgB3ZI1EgJhGEMfXuI1egDsAEhYWjgD26P3xz3M/P2+NvNpQiKp9PiP6uCkQVrjdGGlSc8LBHRV9QIBBU28QABHNa1A3EoWViAA4sgKxBIYqfdbIKIe5NX8LRAqQUElXugOmgK1GS6oB/ECXFhCdw4uNMNCuJUP93XDB9pL7Ilbf6K93YzKaRaw1sIQhePjgQtH1ENt1EkcZynLNG+pHaRaAAAAAElFTkSuQmCC"
                alt="muted"
                className="bell"
              />
            ) : (
              <img
                src="https://e7.pngegg.com/pngimages/67/795/png-clipart-mute-speaker-illustration-computer-icons-scalable-graphics-mute-off-sound-off-icon-miscellaneous-angle-thumbnail.png"
                alt="unmuted"
                className="bell"
              />
            )}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Timer;
