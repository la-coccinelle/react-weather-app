import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  const apiKey = "4e33e6c54bec0d035625405ff9bea7be";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max"> 19° </span>
            <span className="WeatherForecast-temperature-min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
