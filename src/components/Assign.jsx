import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Assign = () => {
  const [curr, setCurr] = useState(0);
  const [clr, setClr] = useState("yellow");

  useEffect(() => {
    if (curr >= 0 && curr <= 20) {
      setClr("green");
    } else if (curr >= 20 && curr <= 30) {
      setClr("blue");
    } else if (curr >= 35 && curr <= 40) {
      setClr("yellow");
    } else {
      setClr("red");
    }
  }, [curr]);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <h1>Speedo meter</h1>
      </Grid>
      <Grid item xs={4}>
        <Button
          disabled={curr === 0}
          onClick={() => curr > 0 && setCurr(curr - 5)}
          variant="contained"
          fullWidth
        >
          De Accelarate
        </Button>
      </Grid>

      <Grid item xs={4} sx={{ color: "green", fontSize: "22px" }}>
        <h5>{curr}</h5>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => curr < 50 && setCurr(curr + 5)}
          disabled={curr === 50}
          variant="contained"
          fullWidth
        >
          Accelarate
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={8}>
        <Card sx={{ bgcolor: clr, height: 100, borderRadius: 5, border: 2 }}>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};
