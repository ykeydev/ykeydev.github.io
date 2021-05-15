import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import logo from "./img/logo.svg";

const Header = () => {
  const menuList = [
    {
      label: "최신",
      href: "/",
    },
    {
      label: "인기",
      href: "/popular",
    },
    {
      label: "검색",
      href: "/search",
    },
    {
      label: "의견/제보",
      href: "/report",
    },
    {
      label: "My",
      href: "/my",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "fixed",
      zIndex: theme.zIndex.drawer + 1,
      background: "white",
      boxShadow: "none",
    },
    logo: {
      height: "38px",
      marginTop: "18px",
      marginLeft: "50px",
    },
    logo_div: {
      flexGrow: 1,
    },
    button_div: {
      marginRight: "60px",
    },
    buttons: {
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();

  const mainLogo = (
    <div className={classes.logo_div}>
      <img src={logo} className={classes.logo} />
    </div>
  );

  const getMenuButtons = () => {
    return menuList.map(({ label, href }) => {
      return (
        <Button
          className={classes.buttons}
          {...{
            key: label,
            color: "primary",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {mainLogo}
          <div className={classes.button_div}>{getMenuButtons()}</div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
