import React from "react";
import SelfQ from "../../img/art-educational-paper-phrase-142815.jpg";
const ThreeQ = () => {
  return (
    <section className="three-ques text-light py-5">
      <div className="container h-100 p-0 text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <p className="display-3 pt-3 font-weight-bold">Three Questions</p>
            <h4 className="pb-2">Our Answer</h4>
            <hr width="80" style={{ backgroundColor: "white" }} />
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex h-100 py-5  text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-4 align-self-center">
            <img
              src={SelfQ}
              alt=""
              srcset=""
              className="img-fluid rounded-circle z-depth-2"
              width="50%"
            />
            <p className="display-4 pt-3 font-weight-bold">1st Unique Ques</p>
            <h4 className="font-weight-light">Ques Description</h4>
          </div>
          <div className="col-4 align-self-center">
            <img
              src={SelfQ}
              alt=""
              srcset=""
              className="img-fluid rounded-circle z-depth-2"
              width="50%"
            />
            <p className="display-4 pt-3 font-weight-bold">1st Unique Ques</p>
            <h4 className="font-weight-light">Ques Description</h4>
          </div>
          <div className="col-4 align-self-center">
            <img
              src={SelfQ}
              alt=""
              srcset=""
              className="img-fluid rounded-circle z-depth-2"
              width="50%"
            />
            <p className="display-4 pt-3 font-weight-bold">1st Unique Ques</p>
            <h4 className="font-weight-light">Ques Description</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeQ;
