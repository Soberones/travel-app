import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavigationBar() {
  return (
    <div>
      <div className="routing">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/topics">Topics</Link>
      </div>
    </div>
  );
}
