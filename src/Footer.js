import React from "react";
import { makeStyles } from "@material-ui/core";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      textAlign: "center",
      background:"grey"
    },
  }));
  const { footer } = useStyles();

  return <div className={footer}>Footer</div>;
};

export default Footer;
