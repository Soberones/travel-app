import React from "react";
import { useHistory } from "react-router-dom";
import "./backArrow.css";
import arrow from "../../img/left-arrow.svg";

export default function BackArrow() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }
  return (
    <div className="arrow-wrapper" onClick={(e) => goBack()}>
      <img style={{ height: 35, width: 35 }} src={arrow} alt="" />
    </div>
  );
}
