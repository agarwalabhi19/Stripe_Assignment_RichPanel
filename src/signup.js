import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Link,
  Button,
  Box,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
const Signup = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    paddingTop: 50,
    width: 400,
    height: 400,
    margin: "0 auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Create Account</h2>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name" />
          <TextField fullWidth label="Email" placeholder="Enter your email" />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Remember me."
          />
          <Box m={2}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className="btn-signup"
            >
              Sign up
            </Button>
            <Box m={1}>
              <Typography align="center">
                {" "}
                Already have a account ?
                <Link href="#" onClick={() => handleChange("event", 0)}>
                  Login
                </Link>
              </Typography>
            </Box>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
