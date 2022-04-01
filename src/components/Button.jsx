import React from "react";

const Button = ({ text, color = "#4889f1" }) => {
  return (
    <button className="button" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
