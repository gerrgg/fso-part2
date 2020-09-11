import React from "react";

const WeatherIcon = ({ src }) => <img alt="weather-icon" src={src} />;

const Weather = ({ capital, weather }) => {
  console.log(weather);
  const convertToF = (kelvin) => ((9 / 5) * kelvin - 459.67).toFixed(1) + "°F";
  const feelsLike = convertToF(weather.main.feels_like);
  const getIconSrc = (iconCode) =>
    `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather">
      <h4>The weather in {capital}</h4>
      <WeatherDetail header={"Feels like"} value={feelsLike} />
      <WeatherDetail header={"Wind"} value={weather.wind.speed} />
      <WeatherIcon src={getIconSrc(weather.weather[0].icon)} />
    </div>
  );
};

const WeatherDetail = ({ header, value }) => (
  <p>
    {header}: {value}
  </p>
);

export default Weather;
