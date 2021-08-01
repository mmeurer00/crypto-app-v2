import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CoinsListContainer from "./CoinsListContainer";

function SearchWindow() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar props={{ query, setQuery }} />
      <CoinsListContainer props={{ query }} />
    </>
  );
}

export default SearchWindow;
