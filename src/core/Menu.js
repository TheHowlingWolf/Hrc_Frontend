import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles.css";

const currenttab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#55ff99" };
  } else {
    return { color: "#D1D1D1" };
  }
};

const Menu = ({ history }) => {
  return (
    <header id="header">
      <div className="container p-0">
        <div className="logo float-left">
          <Link to="/" className="scrollto">
            <img
              src="../img/logo.png"
              alt=""
              className="img-fluid"
              id="logohead"
              height="100%"
            />
          </Link>
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li>
              <Link
                style={currenttab(history, "/")}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={currenttab(history, "/members")}
                className="nav-link"
                to="/members"
              >
                Members
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Menu);
