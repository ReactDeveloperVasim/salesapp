import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Landing from "./components/Landing";
import { Assign } from "./components/Assign";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card>
      <CardContent>
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
