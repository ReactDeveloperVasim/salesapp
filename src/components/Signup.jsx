import React from "react";
import { TextField, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Grid container spacing={2} align="center" sx={{ marginTop: 2 }}>
      <Grid item xs={4}></Grid>

      <Grid
        item
        xs={4}
        fullWidth
        sx={{
          marginTop: 3,
          border: "2px solid black",
          boxShadow: "2px 5px 5px 2px ",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <h3>Sign up </h3>
        <TextField sx={{ margin: 1 }} fullWidth label="First Name" />
        <TextField sx={{ margin: 1 }} fullWidth label="Last Name" />
        <TextField sx={{ margin: 1 }} fullWidth label="Email ID" />
        <TextField sx={{ margin: 1 }} fullWidth label="Password" />
        <TextField sx={{ margin: 1 }} fullWidth label="Conform Password" />
        <Link to="/product">
          <Button sx={{ margin: 2 }} variant="contained">
            Log in
          </Button>
        </Link>

        <Link to="/sign">
          <Button variant="contained">Sign up </Button>
        </Link>
      </Grid>

      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Signup;
