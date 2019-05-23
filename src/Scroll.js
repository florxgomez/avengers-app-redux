import React from "react";

const Scroll = props => {
  return (
    <div style={{ overflowY: "scroll", height: "800px", paddingTop: "10px" }}>
      {props.children}
    </div>
  );
};

export { Scroll };
