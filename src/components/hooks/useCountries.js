import { useState, useEffect } from "react";

export default function useCountries(keyword) {
    const [countries, setCountries] = useState([]);
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => {
            setCountries(data);
            setFilterData(data);
          });
      }, []);
      useEffect(() => {
       
        let filterData = countries.filter((country) => {
          return (
            country.name.common
              .toLowerCase()
              .search(keyword.toLocaleLowerCase()) !== -1
          );
        });
        setFilterData(filterData);
      },[countries,keyword])
  return [filterData];
}
