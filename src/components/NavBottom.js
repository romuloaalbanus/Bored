import React from "react";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InfoIcon from "@material-ui/icons/Info";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DehazeIcon from "@material-ui/icons/Dehaze";

export default function NavBottom() {
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid d-flex">
          <Link to="/ActivityList" type="button" className="btn btn-light">
            <DehazeIcon />
            <br />
            type
          </Link>
          <Link to="/ParticipantsList" type="button" className="btn btn-light">
            <PersonAddIcon />
            <br />
            participants
          </Link>
          <Link to="/PriceList" type="button" className="btn btn-light">
            <AttachMoneyIcon />
            <br />
            price
          </Link>
          <Link to="/About" type="button" className="btn btn-light">
            <InfoIcon />
            <br />
            about
          </Link>
        </div>
      </nav>
    </div>
  );
}
