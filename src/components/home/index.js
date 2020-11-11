import React from "react";
import Recommends from "../recomends";
import "./home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1>Discover:</h1>
      <Recommends />
    </div>
  );
}
