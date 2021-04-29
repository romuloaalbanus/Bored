import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/public/logo192.png" alt="" width="30" height="24" />
            BORED
          </Link>
        </div>
      </nav>
    </div>
  );
}
