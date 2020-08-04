import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import LineChart from "./components/chart-files/LineChart";
import HistoryQuote from "./static_data/d.json";
import { getHistory } from "./services/Services";
import RenderingChart from "./components/chart-files/RenderingChart";

function App() {
  // const [hQ, setHQ] = useState("");

  const [d, setD] = useState("");
  const [ins, setIns] = useState("");
  console.log(ins);

  // useEffect(() => {
  //   getHQ(HistoryQuote);
  // }, []);

  // const getHQ = async (h) => {
  //   const resp = await getHistory(h);
  //   let hiQ = resp;
  //   console.log(hiQ);
  //   return setHQ({ ...resp });
  // };

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

//notion
// imdoingyogayay

export default App;

// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [state, setState] = useState({
//     name: "",
//     greeting: "",
//   });

//   const handleChange = (event) => {
//     setState({ name: event.target.value, greeting: state.greeting });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch(`/greeting/?n=${encodeURIComponent(state.name)}`)
//       .then((response) => response.json())
//       .then((state) => setState(state));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Enter your name: </label>
//           <input
//             id="name"
//             type="text"
//             value={state.name}
//             onChange={handleChange}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{state.greeting}</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// const [state, setState] = useState({
//   name: "",
//   greeting: "",
// });

// const handleChange = (event) => {
//   setState({ name: event.target.value, greeting: state.greeting });
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   fetch(`/greeting/?n=${encodeURIComponent(state.name)}`)
//     .then((response) => response.json())
//     .then((state) => setState(state));
// };

{
  /* <form onSubmit={handleSubmit}>
            // <label htmlFor="name">Enter your name: </label>
            //{" "}
            <input
              id="name"
              type="text"
              value={state.name}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
<p>{state.greeting}</p> */
}
