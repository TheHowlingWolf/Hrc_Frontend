import React from "react";
import Base from "./Base";
import StylePathR from "./components/StylePathR";
import Feature from "./components/Feature";
import OurNetwork from "./components/OurNetwork";
import ThreeQ from "./components/ThreeQ";
import MemberCard from "./components/MemberCard";
import "../styles.css";

const Home = () => {
  return (
    <Base>
      <Feature></Feature>
      <OurNetwork></OurNetwork>
      <ThreeQ></ThreeQ>
      <MemberCard></MemberCard>
    </Base>
  );
};

export default Home;
