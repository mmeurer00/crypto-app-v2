import React from "react";
import './SearchBar.css'

function SearchBar({ props }) {
  return (
    <>
      <div className="coin_search">
        <input
          className="coin_input"
          type="text"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          onBlur={(e) => props.setQuery(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchBar;
