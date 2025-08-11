// src/components/CustomBarChart.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Sidebar from './sidebar';
import Navbar from './navbar';

const weeklyVisitsData = [
  { day: "Mon", visits: 25 },
  { day: "Tue", visits: 38 },
  { day: "Wed", visits: 32 },
  { day: "Thu", visits: 45 },
  { day: "Fri", visits: 40 },
  { day: "Sat", visits: 28 },
  { day: "Sun", visits: 20 }
];

const titleStyle = {
  fontFamily: 'Segoe UI, Arial, sans-serif',
  fontWeight: 700,
  fontSize: '2rem',
  color: '#22223b',
  letterSpacing: '1px',
  marginBottom: '0.5rem',
  background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 2px 8px rgba(78,84,200,0.15)',
  pointerEvents: 'none',
  userSelect: 'none',
  transition: 'none'
};

const subtitleStyle = {
  fontFamily: 'Segoe UI, Arial, sans-serif',
  fontWeight: 500,
  fontSize: '1.1rem',
  color: '#4e54c8',
  marginBottom: '3.5rem',
  letterSpacing: '0.5px',
  pointerEvents: 'none',
  userSelect: 'none',
  transition: 'none'
};

const legendFix = `
  .recharts-default-legend, .recharts-legend-item, .recharts-pie-label-text {
    transition: none !important;
    pointer-events: none !important;
    user-select: none !important;
  }
`;

const CustomBarChart = () => {
  return (
    <>
      <style>{legendFix}</style>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <div style={{
          flex: 1,
          padding: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Navbar />

          <div style={{ marginBottom: '10rem', width: '100%' }}>
            <h3 align='center' style={titleStyle}>Patient Visits This Week</h3>
            <div align='center' style={subtitleStyle}>Daily visit trends for the current week</div>
            <ResponsiveContainer width="100%" height={600}>
              <BarChart data={weeklyVisitsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="visits"
                  fill="#4070f4"
                  radius={[10, 10, 0, 0]}
                  barSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomBarChart;
