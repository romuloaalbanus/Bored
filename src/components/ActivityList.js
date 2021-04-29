import React from "react";
import { Link } from "react-router-dom";

function ActivityList() {
  const type = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
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
      {type.map((card) => {
        return (
          <div key={card} className="d-grid gap-2">
            <Link
              to={`/ActivityList/${card}`}
              type="button"
              className="btn btn-light btn-lg m-3"
              style={{ width: "90vw" }}
            >
              {card}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default ActivityList;
