import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Tabeltail from "./Pages/Tabeltail";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/tabel" element={<Tabeltail />} />
      <Route path="/Login" element={<Login/>}/>
    </Routes>
  );
};

export default App;
