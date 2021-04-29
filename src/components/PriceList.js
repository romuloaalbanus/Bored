import React from "react";
import { Link } from "react-router-dom";

function PriceList() {
  const price = ["free", "$", "$$", "$$$", "$$$$", "$$$$$"];
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
      {price.map((card) => {
        return (
          <Link
            key={card}
            to={`/PriceList/${card}`}
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
export default PriceList;
