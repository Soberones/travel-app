import React from "react";
import "./style.css";

export default function CityInfo(props) {
  return (
    <div className="cityInfo-wrapper">
      <div>
        <div className="image-wrapper">
          <img className="image" src={props.image} alt={props.title} />
        </div>
      </div>
      <div className="cityInfo-text">
        <div className="cityInfo-title">
          <h1>{props.title}</h1>
        </div>
        <div className="descr">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
