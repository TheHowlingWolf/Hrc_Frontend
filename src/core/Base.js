import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Base = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Base;
