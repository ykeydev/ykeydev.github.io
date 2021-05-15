import React from "react";
import {
  makeStyles,
  Typography,
  Toolbar,
  Grid,
  Paper,
} from "@material-ui/core";
import Menubar from "./Menubar";

const Popular = () => {
  const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    popular: {
      width: "100%",
      textAlign: "left",
      marginLeft: "20px",
      marginTop: "28px",
      marginBottom: "40px",
      fontSize: "1.7rem",
      fontWeight: "bold",
    },
    container: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },

    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      display: "block",
    },
    paper: {
      margin: "auto",
      height: "420px",
      width: "200px",
      borderRadius: 25,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes}>
      <Menubar />

      <main className={classes.container}>
        <Toolbar />
        <Typography className={classes.popular}>인기</Typography>
        <Grid container spacing={1}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <Paper elevation={3} className={classes.paper}></Paper>
          <Paper elevation={3} className={classes.paper}></Paper>
          <Paper elevation={3} className={classes.paper}></Paper>
          <Paper elevation={3} className={classes.paper}></Paper>
        </Grid>
      </main>
    </div>
  );
};

export default Popular;
