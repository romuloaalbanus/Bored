import React from "react";
import GitMark from "../GitHub-Mark.png";
import Logo from "../logo.png";

function About() {
  return (
    <div
      style={{
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <h5> About</h5>
      <p className="fw-light">
        This web application uses React, React Router DOM, Axios and Bored APIs.
      </p>
      <hr />
      <h5> Romulo Albanus</h5>
      <p className="fw-light">
        I used to be a bored guy but now i am a IronHacker. I enjoy spending my
        time with programing and video games.
      </p>
      <a className="Github-profile" href="https://github.com/romuloaalbanus">
        <img src={GitMark} alt="" width="50" height="50" />
      </a>
      <hr />
      <h5>Bored API</h5>
      <p className="fw-light">
        The Bored API helps you find things to do when you're bored!
      </p>
      <a className="Bored-API" href="https://www.boredapi.com/">
        <img src={Logo} alt="" width="43" height="46" />
      </a>
    </div>
  );
}
export default About;
