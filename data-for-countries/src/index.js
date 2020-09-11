import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Country from "./Country";
import Countries from "./Countries";
import Filter from "./Filter";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  // if theres a flter get the filtered list - otherwise show all
  const countriesToShow = filter
    ? countries.filter((country) =>
        // lowercase the name and the filter to make search case insensitive
        country.name.toLowerCase().includes(filter.toLowerCase())
      )
    : countries;

  console.log(countriesToShow);
  return (
    <div>
      <h1>Countries</h1>
      <p>
        Filter:
        <Filter filter={filter} setFilter={setFilter} />
      </p>
      <h4>Results</h4>

      {countriesToShow.length === 1 ? (
        <Country country={countriesToShow} />
      ) : (
        <Countries countries={countriesToShow} setFilter={setFilter} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
