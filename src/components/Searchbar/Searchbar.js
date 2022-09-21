import React from "react";
import {memo} from 'react';
import { PropTypes } from "prop-types";

function Searchbar({ value, handleChange }) {
  return (
    <>
      <form>
        <label htmlFor="header-search">Search</label>
        <input
          type="text"
          placeholder="Search for country"
          value={value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
export default memo(Searchbar);
Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
