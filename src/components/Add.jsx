import React, { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

import {
  makeStyles,
  Container,
  Fab,
  Modal,
  TextField,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Button,
  Snackbar,
} from "@material-ui/core";
import Tooltip from "@mui/material/Tooltip";
import { Add as AddIcon } from "@material-ui/icons";
/* import { Alert } from "@mui/material"; */

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    /*     [theme.breakpoints.dowm("sm")]: {
      width: "100vw",
      height: "100vh",
    }, */
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio />}
                  label="Nobody"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "25px" }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        openAlert={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
