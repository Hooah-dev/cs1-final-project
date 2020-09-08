import React from "react";
import FullWidthGrid from "./components/AppView";
import "./App.css";
import { AccessAlarm } from "@material-ui/icons";
import { Button, ButtonBase } from "@material-ui/core";

import TopicsLibrary from "./pages/curriculum/TopicsLibrary";

function App() {
  return (
    <>
    

      <FullWidthGrid/>
{/*       <TopicsLibrary />
      <AccessAlarm />
      <Button variant="contained" color="primary">
        Primary
      </Button> */}
    </>
  );
}

export default App;
