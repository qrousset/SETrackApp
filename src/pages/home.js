import React from "react";
import SummaryCard from "../components/SummaryCard";

const Home = () => {
  let testArr = [
    <SummaryCard key="1"/>,
    <SummaryCard key="2"/>,
    <SummaryCard key="3" />,
    <SummaryCard key="4" />,
    <SummaryCard key="5" />,
    <SummaryCard key="6" />,
    <SummaryCard key="7" />,
    <SummaryCard key="8" />,
    <SummaryCard key="9" />,
  ];

  return (
    <div id="home">
      <h1>SUMMARY</h1>
      <div
        id="cards"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 18vw)",
          gap: "2em",
        }}
      >
        {testArr}
      </div>
    </div>
  );
};

export default Home;
