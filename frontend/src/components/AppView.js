import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { List, ListItem, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item sm={3}>
          <Paper className={classes.paper}>
            imglogo
            <hr />
            <List>

              <MenuItem> Techstation</MenuItem>
              <MenuItem> Course templates</MenuItem>
              <MenuItem>topic</MenuItem>
              <MenuItem> coach</MenuItem>
              <MenuItem>calendar</MenuItem>
            </List>

          </Paper>
        </Grid>

        <Grid item sm={9}>
          <Paper className={classes.paper} >

            <List >
              <ListItem>name</ListItem>
              <ListItem>surname</ListItem>
              <ListItem>logouser</ListItem>
            </List>
          
            <hr />
            <div style= "alignItems:" >
            </div>

          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
