import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const ApexChart = () => {
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
      height: 400, // Set the height here
    },
    responsive: [
      {
        breakpoint: 280,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={options.chart.height}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};