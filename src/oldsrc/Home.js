import React, { useState, useEffect } from "react";
import UIList from "./test_data.json";
import { Typography, makeStyles, Container, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  header: {
    backgroundColor: "#FFCC33",
    paddingRight: "50px",
    paddingLeft: "20px",
    "@media (max-width: 900px)": {
      /*paddingLeft: 0,*/
    },
  },
  body: {
    marginTop: "80px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    maxWidth: "1000px",
  },
}));

function Home() {
  const { body, paper } = useStyles();
  console.log(UIList);
  const displayList = UIList.map((item) => {
    const imageList = item.images;
    const displayImages = imageList.map((image) => {
      return <ul>{image.url}</ul>;
    });

    return (
      <Container>
        <Paper className={paper}>
          <Typography>{item.name}</Typography>
        </Paper>
        {displayImages}
      </Container>
    );
  });

  return <div className={body}>{displayList}</div>;
}

export default Home;
