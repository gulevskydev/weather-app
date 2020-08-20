import React from "react";
import "./forecast.sass";
import CardWeather from "../cardWeather/CardWeather";

export default function Forecast(props) {
  const now = new Date();
  const dayNow = now.getDay();
  const month = now.getMonth();
  return (
    <React.Fragment>
      <div
        className="close-popup animated fadeIn delay-1s"
        onClick={props.onClose}>
        <img
          src={require(`../../img/cancel.svg`)}
          alt=""
          className="close-popup--icon"
        />
      </div>
      <div className="title__text--subtitle animated fadeIn">
        Forecast for the next 5 days
      </div>
      <div className="days">
        {props.data.map((day, id) => {
          return (
            <CardWeather
              town={false}
              key={day + id}
              day={day}
              id={id}
              dayNow={dayNow}
              month={month}
              town={""}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
