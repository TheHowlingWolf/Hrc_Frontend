import React from "react";
import SelfQ from "../../img/art-educational-paper-phrase-142815.jpg";
import one from "../../img/01.jpg";
import two from "../../img/02.jpg";
import three from "../../img/03.jpg";
const ThreeQ = () => {
  return (
    <section className="three-ques marginextra text-light py-5">
      <div className="container h-100 p-0 text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <p className="display-3 pt-3 font-weight-bold">Three Questions</p>
            <h4 className="pb-2">Our Answer</h4>
            <hr
              width="80"
              className="my-0"
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
      </div>
      <div className="container h-100 py-5  text-left">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={one} alt="" />
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 font-weight-bold text-white">
                For those about to rock...
              </h2>
              <p className="lead pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet
                aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                voluptatum molestiae adipisci, beatae obcaecati.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={two} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4 font-weight-bold text-white">
                For those about to rock...
              </h2>
              <p className="lead pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet
                aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                voluptatum molestiae adipisci, beatae obcaecati.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={three} alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 font-weight-bold text-white">
                For those about to rock...
              </h2>
              <p className="lead pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet
                aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                voluptatum molestiae adipisci, beatae obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeQ;
