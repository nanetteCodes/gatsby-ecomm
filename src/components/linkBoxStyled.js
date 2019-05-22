import React from "react";
import "./linkBoxStyled.scss";

const LinkBoxStyled = props => {
  return <span className="logo-box">{props.children}</span>;
};

export default LinkBoxStyled;
