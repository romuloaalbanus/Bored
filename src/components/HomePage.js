import React from "react";
import NavBottom from "./NavBottom";
import { Link } from "react-router-dom";
import "../HomePage.css";
import Img1 from "../img1.png";
import Img2 from "../img2.png";

function HomePage(props) {
  return (
    <div>
      <div
        className="container-fluid d-flex flex-column align-items-center"
        style={{
          position: "fixed",
          top: "45%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {/* <h1>Bored</h1> */}
        <span className="fw-light">Are you bored today?</span>
        <span className="fw-lighter">Find something awesome to do!</span>
        <br />
        <br />
        <Link className="img2" to="/">
          <img src={Img2} alt="" width="86" height="82" />
        </Link>
        <div className="d-flex align-items-center">
          <Link
            to="/random"
            className="btn btn-light btn-lg m-3"
            type="button"
            style={{ width: "90vw" }}
          >
            RANDOM
          </Link>
        </div>
        <Link className="img1" to="/">
          <img src={Img1} alt="" width="85" height="83" />
        </Link>
        <div>
          <Link
            to="/ActivityList"
            className="btn btn-light btn-lg m-3"
            type="button"
            style={{ width: "90vw" }}
          >
            TYPE
          </Link>
        </div>
      </div>
      <NavBottom />
    </div>
  );
}

export default HomePage;
