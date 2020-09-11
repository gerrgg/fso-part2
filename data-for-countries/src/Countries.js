import React, { useState } from "react";

const ShowButton = ({ show, setFilter }) => (
  <button onClick={() => setFilter(show)}>Show</button>
);

const Countries = ({ countries, setFilter }) => {
  const [show, setShow] = useState(false);

  console.log(countries);
  return countries.length > 10 ? (
    countries.map((country) => (
      <p>
        {country.name}{" "}
        {<ShowButton show={country.name} setFilter={setFilter} />}
      </p>
    ))
  ) : (
    <p>Too many results, please narrow</p>
  );
};

export default Countries;
