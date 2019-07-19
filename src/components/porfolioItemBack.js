import React from "react";

const PorfolioItemBack = props => {
  return (
    <div className="flip-card-back">
      <a href={props.Link} target="_blank" rel="noopener noreferrer">
        Visit {props.LinkTitle}
      </a>
      <img src={props.ImgSrc} alt={props.LinkTitle} />
    </div>
  );
};

export default PorfolioItemBack;
