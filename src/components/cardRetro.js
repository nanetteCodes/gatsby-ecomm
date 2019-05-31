import React from "react";

import "./cardRetro.scss";

const CardRetro = props => {
  return (
    <div className="card" style={{ maxWidth: `100%` }}>
      {props.children}
    </div>
  );
};

export default CardRetro;
