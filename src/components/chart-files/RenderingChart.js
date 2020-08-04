import React from "react";
import LineChart from "./LineChart";

export default function RenderingChart({ hQ, ins }) {
  const chartData = () => {
    if (hQ === "") {
      return <div></div>;
    } else {
      const historical = [...hQ.historicals];
      const openPrices = [...historical.map((clpr) => clpr.open_price)];
      const currentPrice = Number(openPrices[openPrices.length - 1]).toFixed(1);
      const beginAt = [
        ...historical.map((beg) => {
          let date = new Date(beg.begins_at);
          let hours = String(date.getHours()).padStart(2, "0");
          let minutes = String(date.getMinutes()).padStart(2, "0");
          let time = `${hours}:${minutes}`;
          return time;
        }),
      ];

      const symbol = hQ.symbol;
      return (
        <LineChart
          op={openPrices}
          ba={beginAt}
          sy={symbol}
          cp={currentPrice}
          ins={ins}
        />
      );
    }
  };

  return <div>{chartData()}</div>;
}
