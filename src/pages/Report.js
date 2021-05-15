import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const Report = () => {
  const useStyles = makeStyles((theme) => ({
    report: {
      marginTop: "500px",
      width: "100%",
      textAlign: "center",
    },
  }));
  const { report } = useStyles();

  return <Typography className={report}>Report</Typography>;
};

export default Report;
