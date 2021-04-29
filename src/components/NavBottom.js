import React from "react";
import { Link } from "react-router-dom";

export default function NavBottom() {
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid d-flex">
          <Link to="/ActivityList" type="button" className="btn btn-dark">
            Type
          </Link>
          <Link to="/ParticipantsList" type="button" className="btn btn-dark">
            Participants
          </Link>
          <Link to="/PriceList" type="button" className="btn btn-dark">
            Price
          </Link>
          <Link to="/About" type="button" className="btn btn-dark">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
}
