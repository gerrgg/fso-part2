import React, { useState, useEffect } from "react";
import Axios from "axios";
import Weather from "./Weather";

const Country = ({ country, setError }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country[0].name}&appid=${process.env.REACT_APP_OWM_KEY}`
    )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="show">
      <Header name={country[0].name} />
      <Detail header="capital" value={country[0].capital} />
      <Detail header="Population" value={country[0].population} />
      <Languages languages={country[0].languages} />
      <Flag src={country[0].flag} alt={`${country[0].name}'s national flag`} />
      {typeof weather.cod !== "undefined" ? (
        <Weather capital={country[0].capital} weather={weather} />
      ) : null}
    </div>
  );
};

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const Header = ({ name }) => <h1>{name}</h1>;

const Detail = ({ header, value }) => (
  <p>
    {capitalize(header)}: {value}
  </p>
);

const Flag = ({ src, alt }) => {
  return (
    <div className="flag">
      <h6>National Flag</h6>
      <img width={200} src={src} alt={alt} />
    </div>
  );
};

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <h4>Languages</h4>
      <ul>
        {languages.map((language, i) => (
          <li key={i}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
