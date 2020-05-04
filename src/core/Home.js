import React, { useEffect } from "react";
import Base from "./Base";
import StylePathR from "./components/StylePathR";
import Feature from "./components/Feature";
import Homevideo from "./components/Homevideo";
import OurNetwork from "./components/OurNetwork";
import ThreeQ from "./components/ThreeQ";
import MemberCard from "./components/MemberCard";
import { Sugar } from "react-preloaders";

import "../styles.css";

const Home = () => {
  return (
    <Base>
      <Feature></Feature>

      <OurNetwork></OurNetwork>
      <ThreeQ></ThreeQ>
      <Sugar
        background="linear-gradient(180deg, #f95759 0%, #922E2F 100%)"
        color={"#f7f7f7"}
        time={1800}
      />
    </Base>
  );
};

export default Home;
