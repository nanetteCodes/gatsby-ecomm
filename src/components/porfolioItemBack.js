import React from "react";
import PropTypes from "prop-types";

const PorfolioItemBack = ({ Link, LinkTitle, ImgSrc, }) => {
  return (
    <div className="flip-card-back">
      <a href={Link} target="_blank" rel="noopener noreferrer">
        {LinkTitle}
      </a>
      <img src={ImgSrc} alt={LinkTitle} />
    </div>
  );
};

PorfolioItemBack.propTypes = {
  Link: PropTypes.string.isRequired,
  LinkTitle: PropTypes.string.isRequired,
  ImgSrc: PropTypes.string.isRequired,
};

export default PorfolioItemBack;
