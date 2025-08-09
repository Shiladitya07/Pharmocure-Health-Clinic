import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Sample data — replace this with your real backend data
const data = [
  { day: "Mon", visits: 25 },
  { day: "Tue", visits: 38 },
  { day: "Wed", visits: 32 },
  { day: "Thu", visits: 45 },
  { day: "Fri", visits: 40 },
  { day: "Sat", visits: 28 },
  { day: "Sun", visits: 20 }
];

const Patientvisitchart= () => (
    <>
        
            <div style={{ width: "100%", height: 300, background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <h3 style={{ marginBottom: "10px" }}>Patient Visits This Week</h3>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#4070f4" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>
        
  </>
)
export default Patientvisitchart;