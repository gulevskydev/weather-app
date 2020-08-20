import "./currentWeather.sass";
import CurrentLocationCard from "../currentLocationCard/CurrentLocationCard";
import Title from "../title/Title";
import React from "react";

export default function CurrentWeather(props) {
  return (
    <React.Fragment>
      {props.data.name === props.curLocation.name ? (
        <Title title="Current Location" svgIcon="location" />
      ) : (
        <Title title={props.data.name} svgIcon="location" />
      )}
      <CurrentLocationCard
        data={props.data}
        onOpen={props.onOpen}
        isMainPage={props.isMainPage}
        curLocation={props.curLocation}
      />
    </React.Fragment>
  );
}
