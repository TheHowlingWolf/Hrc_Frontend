import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My Desp",
  className = "bg-dark text-white",
  children,
}) => {
  return (
    <div>
      <Menu></Menu>
    </div>
  );
};

export default Base;
