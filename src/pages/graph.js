import React from "react";
import Sankey from "../components/SankeyGraph";

const Graph = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Sankey />
    </div>
  );
};

export default Graph;
