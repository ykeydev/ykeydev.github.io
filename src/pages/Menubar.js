import React from "react";
import {
  makeStyles,
  Drawer,
  Typography,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";

const Menubar = () => {
  const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      borderRight: 0,
    },
    drawerContainer: {
      marginTop: "30px",
      overflow: "auto",
    },
    listItemText: {
      paddingLeft: "71px",
    },
    listTitle: {
      marginLeft: "85px",
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    listItem: {
      paddingBottom: "4px",
      paddingTop: "4px",
    },
    listText: {
      fontSize: "1 rem",
    },
  }));
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <Typography variant="h6" className={classes.listTitle}>
          앱
        </Typography>
        <List>
          {["Lifecyle", "Entertainment", "Finance"].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listText }}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>

        <List>
          <Typography className={classes.listTitle} variant="h6">
            화면
          </Typography>
          {[
            "Splash",
            "Micro Interaction",
            "On boarding",
            "Sign in / Log in",
          ].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listText }}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Menubar;
