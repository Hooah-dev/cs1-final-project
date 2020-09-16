import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

export default function StudentsPage() {
  const [openLateralView, setOpenLateralView] = useState(false);

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <h1>Students Page</h1>
        </Grid>
        <Grid item>
          <Button className="custom-button">new student</Button>
        </Grid>
      </Grid>
    </>
  );
}
