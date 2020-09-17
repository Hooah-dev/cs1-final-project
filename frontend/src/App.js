import React from "react";
import "./App.css";
import { AccessAlarm } from "@material-ui/icons";
import { Button, ButtonBase } from "@material-ui/core";

import TopicsLibrary from "./pages/curriculum/TopicsLibrary";

import SimpleCard from "./components/DailyActivityCard/DailyActivityC"
import {ReportProblemIcon} from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <h1>Frontend CS Final Project</h1>
      <TopicsLibrary />
      <AccessAlarm />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <SimpleCard />
    </div>
  );
}

export default App;
