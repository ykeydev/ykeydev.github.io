import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import testv from "../videos/test02.mp4";

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

  return (
    <>
      <Typography className={detail}>Detail screen : {id}</Typography>
      <ReactPlayer
        url={[{ src: testv }]}
        playing={true}
        controls={false}
        volume="0"
        width="100%"
      />
    </>
  );
};

export default Detail;
