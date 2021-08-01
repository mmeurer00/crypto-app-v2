import React from "react";

function Card({ props: coin }) {
  return (
    /* jslint ignore: start */
    <>
      <div
        className="coinInfo"
        style={{
          display: "flex",
        }}
      >
        <div className="name">
          <img src={coin.image} alt={coin.id} />
          <h2>{coin.id}</h2>
        </div>
        <p className="symbol">{coin.symbol}</p>
        <div
          className="info"
          style={{
            display: "flex",
          }}
        >
          <p>{"$" + coin.current_price}</p>
          <p>{"$" + coin.fully_diluted_valuation}</p>
          <p>{coin.ath_change_percentage}</p>
          <p>{coin.market_cap}</p>
        </div>
      </div>
    </>
    /* jslint ignore: end */
  );
}

export default Card;
