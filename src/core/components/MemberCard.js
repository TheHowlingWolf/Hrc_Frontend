import React, { useState, useEffect } from "react";
import "../../membercard.css";
import { getAllMembers } from "../../user/helper/userapicalls";

const MemberCard = ({ member }) => {
  const propic = () => {
    return {
      backgroundImage: `url('http://localhost:5000/api/product/photo/${member._id}')`,
    };
  };

  return (
    <div className="memcard">
      <div id="wrapper" className="loaded">
        <div id="content">
          <div id="card">
            <div id="front">
              <div id="top-pic"></div>
              <div id="avatar" style={propic()}></div>
              <div id="info-box">
                <div className="info">
                  <h1 className="text-white font-weight-bold h5">
                    Dali. {member.name}
                  </h1>
                  <h2 className="font-weight-bold h6">House helsinki</h2>
                </div>
              </div>
              <button className="cardbut btn btn-md btn-dark text-light">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
