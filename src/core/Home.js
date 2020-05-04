import React, { useEffect } from "react";
import Base from "./Base";
import StylePathR from "./components/StylePathR";
import Feature from "./components/Feature";
import Homevideo from "./components/Homevideo";
import OurNetwork from "./components/OurNetwork";
import ThreeQ from "./components/ThreeQ";
import MemberCard from "./components/MemberCard";

import "../styles.css";

const Home = () => {
  return (
    <Base>
      <Feature></Feature>
      <Homevideo url="https://youtu.be/PjoneqwaO_8" />
      <OurNetwork></OurNetwork>
      <ThreeQ></ThreeQ>
      <Homevideo url="https://youtu.be/kZ71OU-QJXI" />
    </Base>
  );
};

export default Home;
