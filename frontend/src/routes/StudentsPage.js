import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ButtonNavBar from "../components/ButtonNavBar";

export default function StudentsPage() {
  const [openLateralView, setOpenLateralView] = useState(false);

  return (
    <>
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <Grid item >  <h1>Students Page</h1> </Grid>
        <Grid item >
        <ButtonNavBar onClick={() => setOpenLateralView(true)}>{/*  */}
        NEW STUDENT
  </ButtonNavBar>  </Grid>
      </Grid>
    </>
  );
}


