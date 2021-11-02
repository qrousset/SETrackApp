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
        ["Sent", " No response ", 40],
        ["Sifted", "Phone Interview", 20],
        ["Sifted", "Interview1", 8],
        ["Sifted", "Japan", 2],
        ["Phone Interview", "Interview1", 16],
        ["Interview1", "Japan", 3],
        ["Interview1", "Interview2", 3],
        ["Interview2", "OnSite", 3],
        ["OnSite", "Offer", 2],
      ]}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

export default Sankey;
