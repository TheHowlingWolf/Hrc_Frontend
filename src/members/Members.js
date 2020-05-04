import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";
import pic from "../img/naturephotography.jpg";
import "./members.css";

const Members = ({ member }) => {
  console.log(member);
  const pro_pic = `https://hrc-backend-app.herokuapp.com/api/product/pro_photo/${member._id}`;
  const about_p_url = `https://hrc-backend-app.herokuapp.com/api/product/about_p/${member.id}`;
  const h1_hob_url = `https://hrc-backend-app.herokuapp.com/api/product/h1_photo/${member.id}`;
  const h2_fun_url = `https://hrc-backend-app.herokuapp.com/api/product/h2_photo/${member.id}`;
  const h3_qua_url = `https://hrc-backend-app.herokuapp.com/api/product/h3_photo/${member.id}`;
  return (
    <section
      className="membeers text-light pb-5"
      style={{ backgroundColor: "white !important" }}
    >
      <header className="masthead text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5 img-fluid rounded-circle"
            src={pro_pic}
            alt=""
          />
          <h1 className="masthead-heading text-uppercase mb-0">
            {member.name}
          </h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fa fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-bold mb-0">
            Member of House Helsinki
          </p>
          <p className="lead pt-3">-- CodeName {member.roll} --</p>
        </div>
      </header>

      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Stationary</h2>
                  <p className="mb-0">
                    A yellow pencil with envelopes on a clean, blue backdrop!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={about_p_url} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Ice Cream</h2>
                  <p className="mb-0">
                    A dark blue background with a colored pencil, a clip, and a
                    tiny ice cream cone!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={h1_hob_url} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Strawberries</h2>
                  <p className="mb-0">
                    Strawberries are such a tasty snack, especially with a
                    little sugar on top!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={h2_fun_url} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Workspace</h2>
                  <p className="mb-0">
                    A yellow workspace with some scissors, pencils, and other
                    objects.
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={h3_qua_url} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
