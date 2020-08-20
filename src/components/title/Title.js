import React from "react";
import "./title.sass";

export default function Title(props) {
  const svgIcon = () => {
    if (props.svgIcon === "book") {
      return (
        <svg id="icon-map" viewBox="0 0 32 32">
          <title>map</title>
          <path d="M0 6l10-4v24l-10 4z"></path>
          <path d="M12 1l10 6v23l-10-5z"></path>
          <path d="M24 7l8-6v24l-8 6z"></path>
        </svg>
      );
    } else if (props.svgIcon === "location") {
      return (
        <svg id="icon-location" viewBox="0 0 32 32">
          <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
        </svg>
      );
    }
  };
  return (
    <div className="title animated fadein">
      <div className="title__icon">{svgIcon()}</div>
      <h1 className="title__text">{props.title}</h1>
    </div>
  );
}
