import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const Detail = (props) => {
  console.log(props);
  const {
    match: {
      params: { id },
    },
  } = props;
  const useStyles = makeStyles((theme) => ({
    detail: {
      marginTop: "500px",
      width: "100%",
      textAlign: "center",
    },
  }));
  const { detail } = useStyles();

  return <Typography className={detail}>Detail screen : {id}</Typography>;
};

export default Detail;
