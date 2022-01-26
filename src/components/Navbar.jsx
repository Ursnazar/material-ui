import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
} from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import CancelIcon from "@mui/icons-material/Cancel";
import Avatar from "@mui/material/Avatar";
import { display } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "30%",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Nazar Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          DEVEP
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." className={classes.input} />
          <div className={classes.cancel}>
            <CancelIcon onClick={() => setOpen(false)} />
          </div>
        </div>
        <div className={classes.icons}>
          <SearchIcon
            onClick={() => setOpen(true)}
            className={classes.searchButton}
          />
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <MailIcon color="action" />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://static.toiimg.com/photo/67191016.cms"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
