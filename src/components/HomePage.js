import React from "react";
import NavBottom from "./NavBottom";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div className="homepage-container">
      <h1>Bored</h1>
      <p>Are you BORED today?</p>
      <Link
        to="/random"
        className="btn btn-dark btn-lg m-2"
        type="button"
        style={{ width: "90vw" }}
      >
        Random
      </Link>
      <Link
        to="/ActivityList"
        className="btn btn-dark btn-lg m-2"
        type="button"
        style={{ width: "90vw" }}
      >
        Type
      </Link>

      <NavBottom />
    </div>
  );
}

export default HomePage;
