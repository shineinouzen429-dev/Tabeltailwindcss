import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Landingpage from "./Pages/landingpage";
import Masuk from "./Pages/Masuk";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/L" element={<Login/>}/>
      <Route path="/R" element={<Register/>}/>
      <Route path="/M" element={<Masuk/>}/>
    </Routes>
  );
};

export default App;
