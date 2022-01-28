import React from "react";

import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import EmailIcon from "@mui/icons-material/Email";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <PersonPinIcon className={classes.icon} />
        <Typography className={classes.text}>Your Profile</Typography>
      </div>
      <div className={classes.item}>
        <LinkedCameraIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <EmailIcon className={classes.icon} />
        <Typography className={classes.text}>Send Email</Typography>
      </div>
      <div className={classes.item}>
        <Brightness6Icon className={classes.icon} />
        <Typography className={classes.text}>Weather</Typography>
      </div>
      <div className={classes.item}>
        <AppShortcutIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
