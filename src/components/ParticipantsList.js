import React from "react";
import { Link } from "react-router-dom";

function ParticipantsList() {
  const participants = [1, 2, 3, 4, 5, 8];
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      {participants.map((card) => {
        return (
          <Link
            key={card}
            to={`/ParticipantsList/${card}`}
            type="button"
            className="btn btn-light btn-lg m-3"
            style={{ width: "90vw" }}
          >
            {card}
          </Link>
        );
      })}
    </div>
  );
}
export default ParticipantsList;
