import React from "react";
import Button from "../../Button";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ color: "black" }}>navbar</div>
      <SearchBox />
      <div>
        <Button text={"Login"} />
        <Button text={"Signup"} />
      </div>
    </div>
  );
};

export default Navbar;
