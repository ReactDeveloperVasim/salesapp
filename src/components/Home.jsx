import { Button, Grid, TextField, Card, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={4}></Grid>

      <Grid
        item
        xs={4}
        fullWidth
        sx={{
          marginTop: 10,
          border: "2px solid black",
          boxShadow: "2px 5px 5px 2px ",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <TextField sx={{ margin: 1 }} fullWidth label="Username" />
        <TextField
          type="password"
          sx={{ margin: 1 }}
          fullWidth
          label="Password"
        />
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
