import React from "react";

import "./cardRetro.scss";

const CardRetro = props => {
  return <div className="card">{props.children}</div>;
};

export default CardRetro;
