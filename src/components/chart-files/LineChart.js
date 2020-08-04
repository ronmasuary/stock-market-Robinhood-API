import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import HistoryQuote from "../../static_data/d.json";
import { getHistory } from "../../services/Services";

function LineChart({ op, ba, sy, cp, ins }) {
  // symbol: "AAPL", interval: "5minute", span: "week", bounds: "regular"
  // HISTORICAL : [
  // {begins_at: "2020-07-27T13:30:00Z"
  // close_price: "377.965000"
  // high_price: "378.370000"
  // interpolated: false
  // low_price: "373.960000"
  // open_price: "374.870000"
  // session: "reg"
  // volume: 1334551}
  // ]

  // const historical = hQ === "" ? [] : [...hQ.historicals];
  // const openPrices =
  //   hQ === "" ? [] : [...historical.map((clpr) => clpr.open_price)];
  // console.log(openPrices);
  // const beginAt = hQ === "" ? [] : [...historical.map((beg) => beg.begin_at)];

  // const symbol = hQ;
  // console.log(symbol.symbol);

  console.log(op);

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
      // {
      //   label: "Sales 2019 (M)",
      //   type: "line",
      //   data: [1, 3, 2, 2, 3],
      //   borderColor: ["rgba(54, 162, 235, 0.2)"],
      //   backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      //   pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
      //   pointBorderColor: "rgba(54, 162, 235, 0.2)",
      //   yAxisID: "y-axis-1",
      // },
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
      // yAxes: [
      //   {
      //     ticks: {
      //       min: 0,
      //       max: 8,
      //       stepSize: 1,
      //     },
      //   },
      // ],
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
