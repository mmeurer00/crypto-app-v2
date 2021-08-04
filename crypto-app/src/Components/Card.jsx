import React from "react";
import './Card.css'

function Card({ props: coin }) {
  return (
    /* jslint ignore: start */
    <>
      <div className="coin_container">
        <div className="coin_row">
          <div className="coin">
            <img src={coin.image} alt={coin.id} className="coin_img"/>
            <h2 className="coin_h1">{coin.id}</h2>
          </div>
          <p className="coin_symbol">{coin.symbol}</p>
          <div className="coin_data">
            <p className="coin_price">{"$" + coin.current_price}</p>
            <p>{"$" + coin.fully_diluted_valuation}</p>
            <p>{coin.ath_change_percentage}</p>
            <p>{coin.market_cap}</p>
          </div>
        </div>
      </div>
    </>
    /* jslint ignore: end */
  );
}

export default Card;
