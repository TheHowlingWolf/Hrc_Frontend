import React from "react";
import prof from "../../img/ElProf.jpg";
const CardBhaiya = () => {
  return (
    <section className="bhaiyaCard">
      <div className="container-fluid d-flex h-100 p-0">
        <div className="row justify-content-center align-item-center">
          <div className="col-6" style={{ backgroundImage: { prof } }}>
            <h1>H1</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBhaiya;
