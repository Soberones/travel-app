import React from "react";
import "./sightCard.css";

export default function SightCard(props) {
  return (
    <>
      <hr />
      <div className="sight-card" onClick={props.onClick}>
        <div className="sight-img-wrapper">
          <img className="sight-img" src={props.image} alt={props.title}></img>
        </div>
        <div className="sight-texts">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}
