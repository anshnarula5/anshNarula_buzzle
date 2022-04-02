import React from "react";
import List from "./List";

const LeftPanel = () => {
  return (
    <div className="leftPanel">
      <div className="links">
        <span className="link">
          <i class="fa-solid fa-house" style={{ marginRight: "1rem" }}></i>Home
        </span>
        <span className="link">
          <i class="fa-solid fa-globe" style={{ marginRight: "1rem" }}></i>{" "}
          Cultures
        </span>
        <span className="link">
          <i
            class="fa-solid fa-people-roof"
            style={{ marginRight: "1rem" }}
          ></i>
          Rooms
        </span>
        <span className="link">
          <i class="fa-solid fa-list" style={{ marginRight: "1rem" }}></i>
          Playlist
        </span>
      </div>
      <h3>Recommended Rooms</h3>
      <List />
      <h3>Recommended Creators</h3>
      <List />
    </div>
  );
};

export default LeftPanel;
