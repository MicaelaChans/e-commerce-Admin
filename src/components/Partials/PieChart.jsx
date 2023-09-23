// eslint-disable-next-line no-unused-vars
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function PieCharts() {
  return (
    <div className="chart-productos rounded">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A", color: "#7fffd4" },
              { id: 1, value: 15, label: "series B", color: "#ffc0cb" },
              { id: 2, value: 20, label: "series C", color: "#ffff9c" },
              { id: 3, value: 5, label: "series D", color: "#a7fafa" },
              { id: 4, value: 50, label: "series E", color: "#e3c3fd" },
            ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
            height: 50,
            width: 50,
          },
        ]}
      />
    </div>
  );
}

export default PieCharts;
