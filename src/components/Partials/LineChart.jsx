// eslint-disable-next-line no-unused-vars
import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function LineCharts() {
  return (
    <div className="chart-productos rounded">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
            color: "#91fcb3",
          },
        ]}
        width={1200}
        height={300}
      />
    </div>
  );
}

export default LineCharts;
