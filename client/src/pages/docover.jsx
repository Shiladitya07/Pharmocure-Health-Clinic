// src/components/MedicinePurchaseChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const medicineData = [
  { month: "Jan", purchases: 120 },
  { month: "Feb", purchases: 90 },
  { month: "Mar", purchases: 150 },
  { month: "Apr", purchases: 80 },
  { month: "May", purchases: 170 },
  { month: "Jun", purchases: 130 },
  { month: "Jul", purchases: 200 },
  { month: "Aug", purchases: 160 },
  { month: "Sep", purchases: 140 },
  { month: "Oct", purchases: 110 },
  { month: "Nov", purchases: 180 },
  { month: "Dec", purchases: 210 },
];

const MedicinePurchaseChart = () => (
  <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
    <Sidebar />
    <Navbar />

    {/* Main content */}
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      marginTop: "-500px", // Adjust for fixed navbar height
    }}>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#2c3e50",
          marginBottom: "30px",
          borderBottom: "3px solid #3498db",
          display: "inline-block",
          paddingBottom: "5px",
        }}
      >
        Monthly Medicine Purchases
      </h2>

      <div style={{ width: "90%", height: "70vh" }}> {/* Taller chart */}
        <ResponsiveContainer>
          <BarChart data={medicineData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend 
              wrapperStyle={{pointerEvents: 'none', userSelect: 'none'}}
            />
            <Bar dataKey="purchases" fill="#3498db" barSize={50} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default MedicinePurchaseChart;
