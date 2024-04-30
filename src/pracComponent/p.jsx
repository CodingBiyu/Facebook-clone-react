import React from "react";

import "./p.css";
function P(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default P;
