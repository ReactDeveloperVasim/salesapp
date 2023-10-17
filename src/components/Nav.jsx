import { Button, Card, Grid, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Card sx={{marginBottom:"20px"}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Link to="/">
              <Button variant="contained" fullWidth>
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/product">
              <Button variant="contained" fullWidth>
                Product
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/contact">
              <Button variant="contained" fullWidth>
                Contact
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/about">
              <Button variant="contained" fullWidth>
                About
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/mobile">
              <Button variant="contained" fullWidth>
                Mobile
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Nav;
