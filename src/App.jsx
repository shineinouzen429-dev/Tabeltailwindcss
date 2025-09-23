import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Abaikan/Login";
import Register from "./Abaikan/Register";
import Landingpage from "./Abaikan/Landingpage";
import Masuk from "./Abaikan/Masuk";
import Tambahdata from "./Pages/Tambahdata";
import Tabeldata from "./Pages/Tabeldata";

const App = () => {
  return (
    <Routes>
      <Route path="/O" element={<Landingpage/>}/>
      <Route path="/L" element={<Login/>}/>
      <Route path="/p" element={<Register/>}/>
      <Route path="/M" element={<Masuk/>}/>
      <Route path="/" element={<Tambahdata/>}/>
      <Route path="/o" element={<Tabeldata/>}/>
    </Routes>
  );
};

export default App;
