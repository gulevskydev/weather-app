import React from "react";
import "../title/title.sass";
import "./others.sass";
import Title from "../title/Title";
import CardWeather from "../cardWeather/CardWeather";

export default function Others(props) {
  return (
    <div className="other">
      <Title title="Other Location" svgIcon="book" />
      <div className="cities">
        {props.cities.length === 0 ? (
          <div className="error">
            You have no saved cities. Click the button above to add them!
          </div>
        ) : (
          props.cities.map((day, id) => {
            return (
              <CardWeather
                key={id}
                day={day}
                town={true}
                onClickCityDetails={(e) => props.onClickCityDetails(e)}
              />
            );
          })
        )}

        {props.cities.length > 0 ? (
          <button
            className="remove remove__all animated fadeIn delay-1s"
            onClick={props.onDeleteCities}>
            Remove all
          </button>
        ) : null}
      </div>
      <div className="add__city animated fadeIn" onClick={props.onAddTown}>
        <svg className="add__city--icon" id="icon-plus" viewBox="0 0 32 32">
          <title>plus</title>
          <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        </svg>
      </div>
    </div>
  );
}
