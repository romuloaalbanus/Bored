import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" width="23" height="26" /> BORED
          </Link>
        </div>
      </nav>
    </div>
  );
}
