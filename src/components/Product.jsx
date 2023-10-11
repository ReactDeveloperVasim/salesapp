import {
  Badge,
  Button,
  Card,
  CardContent,
  Grid,
  Rating,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [category, setcategory] = useState([]);
  const [cate, setcate] = useState([]);
  // console.log(category);
  // console.log(data);
  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    const result1 = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setData(result.data);
    setDataCopy(result.data);
    setcategory(result1.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  useEffect(() => {
    const filt = dataCopy.filter((item) => item.category == cate);
    setData(filt);
  }, [cate]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <TextField
          sx={{ marginTop: "10px" }}
          variant="outlined"
          label="Search Here..."
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: "10px", height: "55px" }}
        >
          Search
        </Button>
      </Grid>
      {category.map((item) => {
        return (
          <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={() => setcate(item)}>
              {item}
            </Button>
          </Grid>
        );
      })}
      {data.map((item) => {
        return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Badge badgeContent={item.price} color="warning">
                  <img
                    src={item.image}
                    height={"100px"}
                    width={"100px"}
                    alt=""
                  />
                </Badge>
                <h4>{item.title.substr(0, 20) + "..."}</h4>
                <h4>{item.category}</h4>
                <p>{item.description.substr(0, 25) + "..."}</p>
                <h6>
                  <Rating value={item.rating.rate}></Rating>
                </h6>
                <Button variant="contained" color="success">
                  Add To Cart
                </Button>
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  color="success"
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Product;