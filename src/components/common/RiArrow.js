import React from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const RiArrow = () => {
  return (
    <>
      <span style={{ position: "relative", top: "-3px" }}>
        <RiArrowUpSFill />
      </span>
      <span style={{ position: "relative", top: "3px", right: "16px" }}>
        <RiArrowDownSFill />
      </span>
    </>
  );
};

export default RiArrow;
