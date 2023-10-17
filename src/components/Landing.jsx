import React from "react";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import ContactUs from "./ContactUs";
import About from "./About";
import Nav from "./Nav";
import Signup from "./Signup";
import { Mobile } from "./Mobile";
import AddToCart from "./AddToCart";

const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
