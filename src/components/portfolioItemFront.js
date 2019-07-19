import React from "react";

const PortfolioItemFront = props => {
  return (
    <div className="flip-card-front">
      <h2>{props.Title}</h2>
      <p>{props.Tech}</p>
    </div>
  );
};

export default PortfolioItemFront;
