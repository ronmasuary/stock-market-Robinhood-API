import React, { useState } from "react";
import { getDataBySymbol } from "../services/Services";

export default function SearchBar({ setD, setIns }) {
  const [search, setSearch] = useState("");

  const changeHandler = (event) => {
    const searchText = event.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    setSearch(searchText);
    return;
  };

  const [err, setErr] = useState(false);

  const populateDataForSymbol = async () => {
    const data = await getDataBySymbol(search);
    if (!data) {
      setErr(true);
      setD("");
      return;
    }
    if (err === true) {
      setErr(false);
    }
    setD(data.historicals);
    setIns(data.name.results[0].name);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    populateDataForSymbol();
  };

  return (
    <div>
      <div className="search-bar-input">
        <form onSubmit={searchHandler}>
          <input value={search} name="search" onChange={changeHandler} />
          <p
            style={{ color: "red", display: err === false ? "none" : "block" }}
          >
            Error! <br />"{search}" is not a valid symbol
          </p>
          <br />
          <button type="submit" style={{ visibility: "hidden" }}>
            {" "}
            search{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
