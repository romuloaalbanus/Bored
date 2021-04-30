import React from "react";
import NavBottom from "./NavBottom";
import { Link } from "react-router-dom";
import "../HomePage.css";

function HomePage(props) {
  return (
    <div>
      <div
        className="container-fluid d-flex flex-column align-items-center"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <h1>Bored</h1>
        <p>Are you BORED today?</p>
        <div className="d-flex align-items-center">
          <Link
            to="/random"
            className="btn btn-light btn-lg m-5"
            type="button"
            style={{ width: "90vw" }}
          >
            Random
          </Link>
        </div>
        <div>
          <Link
            to="/ActivityList"
            className="btn btn-light btn-lg m-5"
            type="button"
            style={{ width: "90vw" }}
          >
            Type
          </Link>
        </div>
      </div>
      <NavBottom />
    </div>
  );
}

export default HomePage;
