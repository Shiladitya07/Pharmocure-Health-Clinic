import React from "react";
import { Routes, Route } from "react-router-dom";
import Doctor from "./Doctor";
import Patient from "./Patient";
import AddProduct from "./AddProduct";
function Admin() {
  return (
    <Routes>
      <Route path="/doctor" element={<Doctor />} />          {/* Renders Doctor components */}
      <Route path="/patient" element={<Patient />} />    {/* Renders Patient page only */}
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/products" element={<AddProduct />} />   {/* Renders Medicine components */}
    </Routes>
  );
}

export default Admin;