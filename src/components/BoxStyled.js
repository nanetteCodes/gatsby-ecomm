import React from "react";

import "./boxStyled.scss";

const BoxStyled = props => {
  return <span className="logo-box">{props.children}</span>;
};

export default BoxStyled;
