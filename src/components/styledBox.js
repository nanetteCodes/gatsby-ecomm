import React from "react";

import "./styledBox.scss";

const StyledBox = props => {
  return <span className="logo-box">{props.children}</span>;
};

export default StyledBox;
