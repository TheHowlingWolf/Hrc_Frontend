import React, { useEffect, useState } from "react";
import Base from "./Base";
import Feature from "./components/Feature";
import MemberCard from "./components/MemberCard";
import "../membercard.css";
import { getAllMembers } from "../user/helper/userapicalls";
const Member = () => {
  const [members, setMembers] = useState([]);

  const preload = () => {
    getAllMembers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setMembers(data);
      }
    });
  };

  useEffect(() => {
    preload();
    console.log(members);
  }, []);

  return (
    <Base>
      <Feature></Feature>
      <div className="container-fluid h-100 text-center text-white">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <p className="display-3 pt-3 font-weight-bold">Our Members</p>
            <h4 className="pb-2">We are the resistance</h4>
            <hr width="80" style={{ backgroundColor: "white" }} />
          </div>
        </div>
        <div className="row w-100 justify-content-center align-items-center">
          {members.map((member, index) => {
            console.log(member);
            return (
              <div key={index} className="col-3">
                <MemberCard member={member} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Member;
