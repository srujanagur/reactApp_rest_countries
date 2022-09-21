import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


export default function CountriesTable({countries}) {
  
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>Language</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr key={country.name.common}>
            <td>
              <img src={country.flags.svg} alt="" width="50px" height="50px" />
            </td>
            <td>
              <Link to={`/details/${country.name.common}`}>
                {country.name.common}
              </Link>
            </td>
            <td>{country.population}</td>
            <td>
              <ul>
                {country.languages ? (
                  Object.entries(country.languages).map(([key]) => (
                    <li key={key}>{country.languages[key]}</li>
                  ))
                ) : (
                  <li>No Languages</li>
                )}
              </ul>
            </td>

            <td>{country.region}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
