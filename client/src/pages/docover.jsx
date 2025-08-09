// src/components/CustomPieChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const doctorDemandData = [
  { department: 'General Physician', demand: 35 },
  { department: 'Dermatology', demand: 50 },
  { department: 'Obstetrics & Gynaecology', demand: 28 },
  { department: 'Orthopaedics', demand: 42 },
  { department: 'Neurology', demand: 30 },
  { department: 'Gastroenterology', demand: 60 },
  { department: 'Paediatrics', demand: 65 },
  { department: 'Dentist', demand: 25 },
  { department: 'ENT', demand: 19 },
  { department: 'Urologist', demand: 51 },
  { department: 'Cardiologist', demand: 18 },
  { department: 'Psychiatrist', demand: 64 },
  { department: 'Nephrology', demand: 43 },
];

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE',
  '#FF6699', '#BBEF7E', '#FFB6C1', '#D4A5A5', '#FFE156',
  '#6A0572', '#F7B7A3', '#B9FBC0'
];

const Piechart= () => (
  <>
      <div style={{ width: "100%", height: "500px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={doctorDemandData}
              dataKey="demand"
              nameKey="department"
              cx="50%"
              cy="50%"
              outerRadius={200}
              label
            >
              {doctorDemandData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" align="center" layout="horizontal" />
          </PieChart>
        </ResponsiveContainer>
      </div>    
  </>
)
export default Piechart;