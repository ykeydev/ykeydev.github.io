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
      textAlign: "center",
      borderRadius: 12,
    },
    image: {
      height: "100%",
      alignItems: "center",
      borderRadius: 12,
    },
    grid: {
      display: "flex",
    },
    imageText: {
      width: "100%",
      textAlign: "center",
      marginTop: "20px",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    linkStyle: {
      textDecoration: "none",
      color: "black",
      "& :visited": { color: "black" },
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
        <Grid container spacing={0} className={classes.grid}>
          {/* <Paper
            elevation={3}
            className={classes.paper}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            zDepth={shadow}
          ></Paper> */}
          {UIUXList.map((uiux) => (
            <Paper
              key={uiux.name}
              elevation={3}
              className={classes.paper}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              onClick={clickUIs}
              zDepth={shadow}
            >
              <Link to={`detail/${uiux.name}`} className={classes.linkStyle}>
                <img src={img1} className={classes.image} />
                <Typography className={classes.imageText}>
                  {uiux.name}
                </Typography>
              </Link>
            </Paper>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Lately;
