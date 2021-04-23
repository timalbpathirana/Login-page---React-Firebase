import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  title: {},
}));

const Hero = (props) => {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <Button
              onClick={props.handleLogOut}
              variant="contained"
              color="primary"
              disableElevation
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </section>
  );
};

export default Hero;
