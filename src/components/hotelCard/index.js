import React from "react";
import SmallButton from "../button";
import "./hotelCard.css";

export default function HotelCard(props) {
  return (
    <div className="hotelCard-wrapper">
      <img className="hotelCard-image" src={props.image} alt={props.titile} />
      <div className="hotelCard-text">
        <div className="hotelCard-descr">
          <h3>{props.title}</h3>
          <h4>price ${props.price}</h4>
          <p>{props.adress}</p>
        </div>
        <div className="hotelCard-Button">
          <SmallButton size={"small"} title="View All Deal" />
        </div>
      </div>

      <hr />
    </div>
  );
}
