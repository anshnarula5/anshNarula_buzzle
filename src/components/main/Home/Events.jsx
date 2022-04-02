import React from "react";
import Event from "./Event";

const Events = ({ name }) => {
  return (
    <div style={{marginBottom : "2rem"}}>
      <div
        style={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: "gray", fontWeight: "light" }}>
          TOP <p className="highlight1">LIVE EVENTS</p> FROM{" "}
          <p className="highlight2">{name}</p> WORLD
        </h3>
        <a href="#" style={{ textDecoration: "none" }}>
          See more
        </a>
      </div>
      <div className="events">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
};

export default Events;
