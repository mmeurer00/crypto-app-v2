import React, { useState } from "react";

function SearchBar({ props }) {
  return (
    <>
      <div className="searchbar">
        <input
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
