import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Base = ({ children }) => {
  return (
    <div>
      <Menu></Menu>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Base;
