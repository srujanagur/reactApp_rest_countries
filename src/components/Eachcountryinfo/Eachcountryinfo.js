import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import "./Eachcountryinfo.css";

export default function Eachcountryinfo() {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        data.map((country) => {
          if (
            country.name.common.toLocaleLowerCase() === name.toLocaleLowerCase()
          ) {
            country.flags = country.flags.png;
            setCountries(country);
          }
          return country;
        });
      }, []);
  });
  return (
    <div className="countryDetails">
      <h1>Country Name:{name}</h1>
      <div>
        <img
          className="image1"
          src={("" + JSON.stringify(countries.flags)).slice(1, -1)}
          alt=""
          width="200px"
          height="200px"
        />
      </div>
      <br />

      <div>
        <p>
          {" "}
          <span>Capital: {countries.capital}</span>
        </p>
        <p>
          {" "}
          <span>Continents: {countries.continents}</span>
        </p>
        <p>
          {" "}
          <span>Subregion: {countries.subregion}</span>
        </p>
        <p>
          <span>area: {countries.area}</span>
        </p>
        <p>
          <span>Population: {countries.population}</span>
        </p>
        <p>
          {" "}
          <span>Time Zone: {countries.timezones}</span>
        </p>
      </div>
      <Button className="btn" variant="info">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
