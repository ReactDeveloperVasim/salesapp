import { Grid, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MobileItem from "./MobileItem";

export const Mobile = () => {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [text, setText] = useState("");
  // console.log("mobile-----",data);

  const getMobile = async () => {
    const result = await axios.get("http://localhost:4040/mobile");
    setData(result.data);
    setDataCopy(result.data)
  };

  useEffect(() => {
    getMobile();
  }, []);

  useEffect(() => {
    const filt = dataCopy.filter((item) =>
      item.brand.toUpperCase().includes(text.toUpperCase())
    );
    setData(filt);
  }, [text]);




  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          label="Search Here..."
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth sx={{ height: "55px" }}>
          submit
        </Button>
      </Grid>
      {data.map((item) => {
        return <MobileItem item={item}/>;
      })}
    </Grid>
  );
}