import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Login = ({ handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/pricing";
  };
  const paperStyle = {
    padding: 20,
    paddingTop: 50,
    height: 400,
    width: 400,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Login In to your acoount</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography align="center" className="add-margin">
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Box m={2}>
          <Typography align="center" className="add-margin">
            {" "}
            New to myapp ?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
