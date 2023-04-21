import React, { useState } from "react";
import "../Styles/Home.css";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

const Home = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  const toggleComponent1 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
  };

  const toggleComponent2 = () => {
    setShowComponent1(false);
    setShowComponent2(!showComponent2);
    setShowComponent2(true);
  };
  return (
    <div className="home">
      <div className="tab-header">
        <ul className="tab-ul">
          <li className="tab-li">
            <a href="/">
              <span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNnB4IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBkPSJNMTIgNXYxMGw5IDktOSA5djEwaDI0VjMzbC05LTkgOS05VjVIMTJ6bTIwIDI5djVIMTZ2LTVsOC04IDggOHptLTgtMTJsLTgtOFY5aDE2djVsLTggOHoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoNDh2NDhIMFYweiIvPgo8L3N2Zz4K"
                  jsname="UtTbzb"
                  class="act-icon-img"
                  alt="Timer"
                />
              </span>
              <span className="timBtn" onClick={toggleComponent1}>
                Timer
              </span>
            </a>
          </li>
          <li className="tab-li">
            <a href="/">
              <span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNnB4IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBkPSJNMCAwaDQ4djQ4SDB6IiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBkPSJNMzAgMkgxOHY0aDEyVjJ6bS04IDI2aDRWMTZoLTR2MTJ6bTE2LjA1LTEzLjIzbDIuODUtMi44NWMtLjg2LTEuMDMtMS44LTEuOTctMi44My0yLjgzbC0yLjg1IDIuODVDMzIuMTUgOS40OCAyOC4yNCA4IDIzLjk5IDggMTQuMDQgOCA2IDE2LjA2IDYgMjZzOC4wNCAxOCAxNy45OSAxOFM0MiAzNS45NCA0MiAyNmMwLTQuMjUtMS40OC04LjE1LTMuOTUtMTEuMjN6TTI0IDQwYy03LjczIDAtMTQtNi4yNy0xNC0xNHM2LjI3LTE0IDE0LTE0IDE0IDYuMjcgMTQgMTQtNi4yNyAxNC0xNCAxNHoiLz4KPC9zdmc+Cg=="
                  jsname="UtTbzb"
                  class="act-icon-img"
                  alt="Timer"
                />
              </span>
              <span className="timBtn" onClick={toggleComponent2}>
                StopWatch
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        {showComponent1 ? <Timer /> : null}
        {showComponent2 ? <Stopwatch /> : null}
      </div>
    </div>
  );
};

export default Home;
