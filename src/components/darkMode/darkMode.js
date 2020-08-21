import React from "react";
import "./darkmode.sass";

export default function DarkMode(props) {
  return (
    <div className="darkmode">
      <span className="darkmode__text">Dark Mode:</span>
      <input
        onChange={props.onChangeTheme}
        name="checkbox"
        type="checkbox"
        id="switch"
        className="switch"
        checked={props.checked}
      />
      <label htmlFor="switch">Togle</label>
    </div>
  );
}
