import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Typography,
  Toolbar,
  Grid,
  Paper,
  IconButton,
} from "@material-ui/core";
import Menubar from "./Menubar";
import img1 from "../img/thumbnail.jpg";
import UIUXList from "../test_data.json";

const Lately = () => {
  const drawerWidth = 240;
  const [shadow, setShadow] = useState(0);
  const useStyles = makeStyles((theme) => ({
    lately: {
      width: "100%",
      textAlign: "left",
      marginLeft: "20px",
      marginTop: "28px",
      marginBottom: "30px",
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
      borderRadius: 12,
    },
    image: {
      width: "100%",
      borderRadius: 12,
    },
  }));
  const classes = useStyles();
  const onMouseOver = () => {
    setShadow(1);
  };
  const onMouseOut = () => setShadow(1);
  const clickUIs = (e) => {
    console.log(e.target.getAttribute("index"));
  };
  return (
    <div className={classes}>
      <Menubar />

      <main className={classes.container}>
        <Toolbar />
        <Typography className={classes.lately}>최근</Typography>
        <Grid container spacing={0}>
          {/* <Paper
            elevation={3}
            className={classes.paper}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            zDepth={shadow}
          ></Paper> */}
          {UIUXList.map((uiux) => (
            <Link to="/detail">
              <Paper
                key={uiux.name}
                elevation={3}
                className={classes.paper}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                onClick={clickUIs}
                zDepth={shadow}
              >
                {uiux.description}
              </Paper>
            </Link>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Lately;
