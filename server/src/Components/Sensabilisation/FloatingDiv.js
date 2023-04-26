import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div className="floatingDiv" style={{
      justifyContent: "space-around",
      background: "white",
      boxShadow: "var(--boxShadow)",
      borderRadius: "17px",
      display: "flex",
      alignItems: "center",
      padding: "0px 28px 0px 0px",
      height: "4.5rem"
    }}>
      <img src={img} alt="" style={{ transform: "scale(0.4)" }} />
      <span style={{
        fontFamily: "sans-serif",
        fontSize: "16px",
        color: "black"
      }}>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
