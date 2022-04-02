import React from "react";

const Event = () => {
  return (
    <div className="event">
      <div className="thumbnail">
        <span
          style={{
            backgroundColor: "red",
            padding: ".1rem",
            paddingInline: ".3rem",
            borderRadius: "10%",
            position: "relative",
            top: "1.8rem",
            left: ".3rem",
          }}
        >
          LIVE
        </span>
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=40"
          alt=""
          className="avatar"
          style={{ position: "relative", top: "2.8rem", left: "4.5rem" }}
        />

        <img
          src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
          className="eventImage"
        />
      </div>
      <span style={{ display: "flex", alignItems: "center" }}>
        <p>Learn Data science Tutorial - Full course for beginners</p>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </span>
      <span style={{ fontWeight: 100, fontSize: 15 }}>FreeCodeCamp.org</span>
      <span style={{ fontWeight: 100, fontSize: 15, color : "gray" }}>
      <i class="fa-solid fa-clock" style={{marginRight : ".2rem"}}></i> 1:20:00
      </span>
    </div>
  );
};

export default Event;
