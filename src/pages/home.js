import React from "react";
import SummaryCard from "../components/SummaryCard";
import Form from "../components/Form";

const Home = () => {
  let testArr = [
    <SummaryCard />,
    <SummaryCard />,
    <SummaryCard />,
    <SummaryCard />,
    <SummaryCard />,
    <SummaryCard />,
    <SummaryCard />,
    <SummaryCard />,
    <SummaryCard />,
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
