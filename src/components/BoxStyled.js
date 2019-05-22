import React from "react";
//import PropTypes from "prop-types";

import "./boxStyled.scss";

const BoxStyled = props => {
  return <span className="logo-box">{props.children}</span>;
};

// BoxStyled.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default BoxStyled;
