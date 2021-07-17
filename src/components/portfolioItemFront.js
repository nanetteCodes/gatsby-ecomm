import React from "react";
import PropTypes from "prop-types";

const PortfolioItemFront = ({ Title, Tech }) => {
  return (
    <div className="flip-card-front">
      <h2>{Title}</h2>
      <p>{Tech}</p>
    </div>
  );
};

PortfolioItemFront.propTypes = {
  Title: PropTypes.string.isRequired,
  Tech: PropTypes.string.isRequired,
};

export default PortfolioItemFront;
