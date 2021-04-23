import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Developed using React/Material UI with ❤️ "}
      <Grid>
        {"Copyright © "}
        {new Date().getFullYear()}
      </Grid>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const email = props.email;
  const password = props.password;
  const setEmail = props.setEmail;
  const setPassword = props.setPassword;
  const handleLogin = props.handleLogin;
  const handleSignUp = props.handleSignUp;
  const hasAccount = props.hasAccount;
  const emailError = props.emailError;
  const passwordError = props.passwordError;

  const { setHasAccount } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome Back!
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={email}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailError}</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography color="secondary">
            {"Must be 6 characters long *"}
          </Typography>
          <p>{passwordError}</p>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Grid>
            {hasAccount ? (
              <Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
                <Grid item>
                  <Typography>
                    Don't have an account?
                    <Button
                      onClick={() => setHasAccount(!hasAccount)}
                      variant="outlined"
                    >
                      Sign Up
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
                <Grid item>
                  <Typography>
                    Have an account?
                    <Button
                      onClick={() => setHasAccount(!hasAccount)}
                      variant="outlined"
                    >
                      Sign In
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>

          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
