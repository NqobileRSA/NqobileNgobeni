import React from "react";
import "./GlitchText.scss";
const GlitchText = () => {
  return (
    <span
      data-text="<Nqobile/>"
      className="animateText"
      style={{
        fontSize: "25px",
        fontFamily: '"Press Start 2P", system-ui',
        fontWeight: "bolder",
      }}>
      {"<Nqobile/>"}
    </span>
  );
};

export default GlitchText;
