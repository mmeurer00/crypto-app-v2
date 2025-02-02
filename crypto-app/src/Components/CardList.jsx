import React from "react";
import Card from "./Coin/Card";

function CardList({ props }) {
  return (
    <>
      {props.map((coinDetail) => (
        <Card props={coinDetail} />
      ))}
    </>
  );
}

export default CardList;
