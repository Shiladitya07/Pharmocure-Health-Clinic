import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'
import Sidebar from './sidebar'
import Navbar from './navbar'

// Sample data for monthly patient registrations
const patientData = [
  { month: 'Jan', registrations: 120 },
  { month: 'Feb', registrations: 98 },
  { month: 'Mar', registrations: 150 },
  { month: 'Apr', registrations: 200 },
  { month: 'May', registrations: 170 },
  { month: 'Jun', registrations: 210 },
  { month: 'Jul', registrations: 180 },
  { month: 'Aug', registrations: 160 },
  { month: 'Sep', registrations: 190 },
  { month: 'Oct', registrations: 220 },
  { month: 'Nov', registrations: 175 },
  { month: 'Dec', registrations: 195 },
]

// Sample data for doctor demand by department
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
]

// Sample data for weekly patient visits
const weeklyVisitsData = [
  { day: "Mon", visits: 25 },
  { day: "Tue", visits: 38 },
  { day: "Wed", visits: 32 },
  { day: "Thu", visits: 45 },
  { day: "Fri", visits: 40 },
  { day: "Sat", visits: 28 },
  { day: "Sun", visits: 20 }
]

// Colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE', '#FF6699', '#BBEF7E', '#FFB6C1', '#D4A5A5', '#FFE156', '#6A0572', '#F7B7A3', '#B9FBC0'];

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
}

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
}

const legendFix = `
  .recharts-default-legend, .recharts-legend-item, .recharts-pie-label-text {
    transition: none !important;
    pointer-events: none !important;
    user-select: none !important;
  }
`;

const Dashboard = () => (
  <>
    <style>{legendFix}</style>
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{
        flex: 1,
        padding: '9rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Navbar />

        {/* Monthly Patient Registrations */}
        <div style={{ marginBottom: '6rem', width: '100%' }}>
          <h3 align='center' style={titleStyle}>Monthly Patient Registrations</h3>
          <div align='center' style={subtitleStyle}>Overview of patient registration trends throughout the year</div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={patientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" align="center" layout="horizontal" />
              <Line type="monotone" dataKey="registrations" name="REGISTRATION" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Patient Visits - BAR CHART */}
        <div style={{ marginBottom: '6rem', width: '100%' }}>
          <h3 align='center' style={titleStyle}>Patient Visits This Week</h3>
          <div align='center' style={subtitleStyle}>Daily visit trends for the current week</div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyVisitsData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="visits"
                fill="#4070f4"
                radius={[10, 10, 0, 0]} // Rounded top corners
                barSize={40} // Thickness of bars
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Doctor Demand Chart */}
        <div style={{ width: '100%' }}>
          <h3 align='center' style={titleStyle}>Monthly Doctor Demand by Department</h3>
          <div align='center' style={subtitleStyle}>Department-wise doctor demand for the current year</div>
          <ResponsiveContainer width="100%" height={600}>
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

      </div>
    </div>
  </>
)

export default Dashboard