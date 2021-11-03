import React from "react";
import Chart from "react-google-charts";

const Sankey = () => {
  return (
    <Chart
      width={"90vw"}
      height={"80vh"}
      chartType="Sankey"
      loader={<div>Loading Chart</div>}
      data={[
        ["From", "To", "#"],
        ["Sent", "Sifted", 30],
        ["Sifted", "Phone Interview", 16],
        ["Sifted", "Interview1", 8],
        ["Phone Interview", "Interview1", 14],
        ["Interview1", "Interview2", 10],
        ["Interview2", "OnSite", 7],
        ["OnSite", "Offer", 3],
        ["Offer", "Accepted", 1],
        ["Offer", "Declined", 2],
      ]}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

export default Sankey;
