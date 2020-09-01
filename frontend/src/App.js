import React from "react";
import "./App.css";

import TopicsLibrary from "./pages/curriculum/TopicsLibrary";
import CanddidacyPage from "./components/CandidacyPage";
import DotsMobileStepper from "./components/testSteps";
import SingIn from "./components/singIn";
import ConfirmSingIn from "./components/ConfirmSingIn";

function App() {
  return (
    <div className="App">
      <h1>Frontend CS Final Project</h1>
      <TopicsLibrary />
      <CanddidacyPage/>
      <br></br>
      <SingIn/>
      <br></br>
      <ConfirmSingIn/>
    </div>
  );
}

export default App;
