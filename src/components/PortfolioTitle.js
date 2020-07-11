import React from "react";
import "./Styles/Title.css";

function PortfolioTitle(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default PortfolioTitle;
