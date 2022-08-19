import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-light btn-outline-dark"
        onClick={props.action}
        style={button}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
const button = {
  width: "14rem",
  borderRadius: "2",
  outline: "none",
  height: "50px",
  margin: "1px",
};
