import React from "react";

import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
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
  text: {
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
        <Typography className={classes.text}>HomeIconpage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>HomeIconpage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>HomeIconpage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>HomeIconpage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>HomeIconpage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>HomeIconpage</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
