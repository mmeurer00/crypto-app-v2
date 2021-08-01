import React, { useEffect, useState } from "react";
import { HOST_ADDRESS } from "../envVars";
import CardList from "./CardList";
// import "dotenv/config";
require("dotenv").config();

function CoinsListContainer({ props }) {
  const [coinsList, setCoinsList] = useState([]);
  useEffect(() => {
    (async () => {
      const query = props.query || "all";
      const res = await fetch(`${HOST_ADDRESS}/api/stats/${query}`);
      console.log(process.env);
      // const res = await fetch(`${HOST_ADDRESS}/api/stats/bitcoin`);
      // console.log(`${HOST_ADDRESS}/api/stats/${query}`);
      const json = await res.json();
      setCoinsList(json);
    })();
  }, [props.query]);
  return (
    <>
      <section className="coinsListContainer">
        <CardList props={coinsList} />
      </section>
    </>
  );
}

export default CoinsListContainer;
