import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";
import Home from "./Home";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
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
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 1000,
    color: "#663300",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    color: "#663300",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

function Header() {
  // const classes = useStyles();
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {mainLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "#663300",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{mainLogo}</div>
      </Toolbar>
    );
  };
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const mainLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      You Eye The UI
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  // return (
  //   <div className="Header">
  //     <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
  //     {mobileView ? displayMobile() : displayDesktop()}

  //     <Toolbar className={classes.toolbar}>
  //          <Typography component="h1" variant="h6" color="primary" noWrap className={classes.title}>
  //           YOU EYE THE UI
  //         </Typography>
  //       <IconButton
  //         edge="end"
  //         color="primary"
  //         aria-label="open drawer"
  //         className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
  //       >
  //         <MenuIcon />
  //       </IconButton>
  //     </Toolbar>
  //   </AppBar>
  //   </div>
  // );
  return (
    <>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <body>
        <Home />
      </body>
    </>
  );
}
export default Header;
