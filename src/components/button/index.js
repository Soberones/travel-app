import React from "react";
import "./button.css";
export default function Button(props) {
  return (
    <div className={props.size} onClick={props.onClick}>
      <p>{props.title}</p>
    </div>
  );
}
