import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Tabeltail from "./Pages/Tabeltail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
};

export default App;