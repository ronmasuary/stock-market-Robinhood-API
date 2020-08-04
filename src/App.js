import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

import RenderingChart from "./components/chart-files/RenderingChart";

function App() {
  const [d, setD] = useState("");
  const [ins, setIns] = useState("");

  const renderApp = () => {
    return (
      <div className="App">
        <div className="search-bar">
          <SearchBar setD={setD} setIns={setIns} />
        </div>
        <div className="chart">
          <RenderingChart hQ={d} ins={ins} />
        </div>
      </div>
    );
  };
  return renderApp();
}

export default App;
