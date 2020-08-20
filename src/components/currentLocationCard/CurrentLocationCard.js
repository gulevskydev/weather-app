import React from "react";
import "./currentLocationCard.sass";

export default function CurrentLocationCard(props) {
  let data = props.data;

  const temp = data.main.temp;
  const country = data.sys.country;
  const town = data.name;
  const img = data.weather[0].icon;
  const weather = data.weather[0].main;
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;

  return (
    <div className="main__weather animated fadeIn" onClick={props.onOpen}>
      <h2 className="main__weather__city animated fadeIn">
        {town},{country}
      </h2>
      <div className="main__weather__details">
        <img
          src={require(`../../img/weather/${img}.svg`)}
          alt="image"
          className="main__weather__details--icon animated fadeIn"
        />
        <div className="main__weather__details--temp animated fadeIn">
          {Math.ceil(temp)}°С
        </div>
      </div>
      <div className="main__weather__text">
        <div className="main__weather__text--phrase animated fadeIn">
          {weather}
        </div>
        <div className="main__weather__text--minmax animated fadeIn">
          {Math.ceil(minTemp)}℃<span className="dot">•</span>
          {Math.ceil(maxTemp)}℃
        </div>
      </div>
    </div>
  );
}
