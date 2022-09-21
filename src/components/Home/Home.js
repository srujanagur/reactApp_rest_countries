import React from "react";
import { useCallback, useState } from "react";

import CountriesTable from "../CountriesTable/CountriesTable";
import Searchbar from "../Searchbar/Searchbar";
import useCountries from "../hooks/useCountries";

export default function Home() {
  const [keyword, setKeyword] = useState("");

  const [filterData] = useCountries(keyword);

  const handleChange = useCallback((event) => {
    setKeyword(event.target.value);
  }, []);

  return (
    <div>
      <Searchbar handleChange={handleChange} value={keyword} />
      <CountriesTable countries={filterData} />
    </div>
  );
}
