import React from "react";
import Events from "./Events";

const Home = () => {
  return (
    <div className="home">
      
      <Events name={"Data Scince"} />
      <Events name={"Software Engineering"} />
      <Events name={"Finance and Investment"} />
      <Events name={"Entrepreneurship"} />
    </div>
  );
};

export default Home;
