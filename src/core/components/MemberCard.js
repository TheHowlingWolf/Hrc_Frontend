import React from "react";
import "../../styles.css";

const MemberCard = () => {
  return (
    <div id="wrapper">
      <div id="content">
        <div id="card">
          <div id="front">
            <div id="top-pic"></div>
            <div id="avatar"></div>
            <div id="info-box">
              <div className="info">
                <h1>Dali. Debraj Sengupta</h1>
                <h2>House helsinki</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
