import React from "react";
import { Routes, Route } from "react-router-dom";
//import Login from "./Abaikan/Login";
//import Register from "./Abaikan/Register";
//import Landingpage from "./Abaikan/Landingpage";
//import Masuk from "./Abaikan/Masuk";
import Tambahdata from "./Pages/Tambahdata";
import Tabeldata from "./Pages/Tabeldata";
import EditData from "./Pages/Editdata";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Tambahdata/>}/>
      <Route path="/w" element={<Tabeldata/>}/>
      <Route path="/edit/:id" element={<EditData/>}/>
    </Routes>
  );
};

export default App;
