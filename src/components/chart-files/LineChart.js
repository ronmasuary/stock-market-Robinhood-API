import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ op, ba, sy, cp, ins }) {
  const data = {
    labels: [...ba],

    borderColor: ["rgba(255, 255, 95, 0.2)"],
    backgroundColor: ["rgba(255, 206, 86, 0.2)"],
    pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
    pointBorderColor: "rgba(255, 206, 86, 0.2)",
    datasets: [
      {
        label: "price",
        type: "line",
        data: [...op],

        borderColor: ["rgba(255, 255, 95, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
        yAxisID: "y-axis-1",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: [sy + " - " + ins, cp + "$"],
      fontSize: 15,
      position: "top",
    },

    elements: {
      line: {
        fill: false,
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: true,
          },

          ticks: {
            autoSkip: true,
          },

          // labels: {
          //   show: true,
          // },
        },
      ],
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          gridLines: {
            display: false,
          },
          labels: {
            show: true,
          },
        },
      ],
    },
  };

  return (
    <div className="line-chart">
      <Line className="line" data={data} options={options} />
    </div>
  );
}

export default LineChart;
