import React from "react";
import "./cardWeather.sass";

// formating data for UI
function getDays(dayNow, month, data) {
  const time = data.split(" ")[1].slice(0, 5);
  const day = data.split(" ")[0].slice(8);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${days[dayNow]}, ${day} ${months[month]}, ${time}`;
}

export default function CardWather(props) {
  if (props.town === true) {
    var { day } = props;
  } else {
    var { day, id, dayNow, month } = props;
  }
  console.log(props.day);
  const img = day.weather[0].icon;
  const weather = day.weather[0].main;
  const data = day.dt_txt;
  const { temp, temp_min, temp_max } = day.main;
  const titleCity = () => {
    return `${day.name}, ${day.sys.country}`;
  };
  return (
    <div
      className="cities__weather animated fadeIn"
      onClick={(e) => {
        if (props.town) props.onClickCityDetails(day);
      }}>
      <div className="cities__weather__name animated fadeIn">
        {props.town ? titleCity() : getDays(dayNow, month, data)}
      </div>
      <div className="cities__weather__details">
        <img
          src={require(`../../img/weather/${img}.svg`)}
          alt="wather icon"
          className="cities__weather__details--icon animated fadeIn"
        />

        <div className="cities__weather__details__text">
          <div className="cities__weather__details__text--phrase animated fadeIn">
            {weather}
          </div>
          <div className="cities__weather__details__text--minmax animated fadeIn">
            {Math.floor(temp_min)}°С <span className="dot">•</span>{" "}
            {Math.floor(temp_max)}°С
          </div>
        </div>
        <div className="cities__weather__details__temp animated fadeIn">
          {Math.floor(temp)}°С
        </div>
      </div>
    </div>
  );
}
