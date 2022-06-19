import React from "react";
import CheckBoxs from "./components/CheckBoxs";
import Graph from "./components/Graph";
import { fetchPrefectures } from "./services/ResasApi";

function App() {
  let prefectures = fetchPrefectures();

  return (
    <div className="App">
      <h1>Research_react_app</h1>
      <CheckBoxs prefectures={prefectures} />
    </div>
  );
}

export default App;
