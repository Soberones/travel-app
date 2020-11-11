import React from "react";
import "./cityCard.css";

export default function CityCard(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="card-img">
        <img className="img" src={props.image} alt={props.title}></img>
      </div>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
