import React from "react";

const ShowButton = ({ countryName, setFilter }) => (
  <button onClick={() => setFilter(countryName)}>Show</button>
);

const Countries = ({ countries, setFilter }) => {
  return countries.length < 10 ? (
    countries.map((country) => (
      <p>
        {country.name}{" "}
        {<ShowButton countryName={country.name} setFilter={setFilter} />}
      </p>
    ))
  ) : (
    <p>Too many results, please narrow</p>
  );
};

export default Countries;
