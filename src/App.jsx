import React from "react";
import { Routes, Route } from "react-router-dom";
//import Login from "./Abaikan/Login";
//import Register from "./Abaikan/Register";
//import Landingpage from "./Abaikan/Landingpage";
//import Masuk from "./Abaikan/Masuk";
import Tambahdata from "./Pages/Tambahdata";
import Tabeldata from "./Pages/Tabeldata";
import EditData from "./Pages/Editdata";
import Sidnav from "./Component/Sidnav";
import Dashboard from "./Component/Dashboard";

const App = () => {
  return (
    <div>
      <Sidnav/>
      <div>

    <Routes>
      <Route path="/Y" element={<Tambahdata/>}/>
      <Route path="/R" element={<Dashboard/>}/>
      <Route path="/w" element={<Tabeldata/>}/>
      <Route path="/edit/:id" element={<EditData/>}/>
    </Routes>
      </div>
    </div>
  );
};

export default App;
