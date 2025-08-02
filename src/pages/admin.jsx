import React from "react";

function Admin() {
  return (
    <Routes>
      <Route path="/doctor" element={<Doctor />} />          {/* Renders Doctor components */}
      <Route path="/patient" element={<Patient />} />    {/* Renders Patient page only */}
      <Route path="/medicine" element={<Medicine />} />
    </Routes>
  );
}

export default Admin;