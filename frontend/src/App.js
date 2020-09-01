import React from "react";
import "./App.css";

import TopicsLibrary from "./pages/curriculum/TopicsLibrary";
import CanddidacyPage from "./components/CandidacyPage";
import DotsMobileStepper from "./components/testSteps";

function App() {
  return (
    <div className="App">
      <h1>Frontend CS Final Project</h1>
      <TopicsLibrary />
      <CanddidacyPage/>
      <DotsMobileStepper/>
    </div>
  );
}

export default App;
