// className = cardRetro will render css for regualr retro card
// className = flipCardRetro will render css for flip cards
import React from "react";
import PropTypes from "prop-types";
import "./cardRetro.scss";

// TODO: add logic to show basic card, or all the html for flip in a condition

const CardRetro = props => {
  return <div className={props.className}>{props.children}</div>;
};

CardRetro.propTypes = {
  className: PropTypes.oneOf(["cardRetro", "flipCardRetro"]).isRequired,
  children: PropTypes.node.isRequired
};

export default CardRetro;
