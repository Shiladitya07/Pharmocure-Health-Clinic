import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'

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
  { department: 'Cardiology', demand: 35 },
  { department: 'Pediatrics', demand: 50 },
  { department: 'Orthopedics', demand: 28 },
  { department: 'Dermatology', demand: 42 },
  { department: 'Neurology', demand: 30 },
  { department: 'General', demand: 60 },
]

// Colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE', '#FF6699']

const Dashboard = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Admin Dashboard</h2>
    <div style={{ marginBottom: '6rem' }}>
      <h3>Monthly Patient Registrations</h3>
      <br></br>
      <br></br>
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
    <div>
      <h3>Monthly doctor Demand by Department</h3>
      <br></br>
      <ResponsiveContainer width="100%" height={400}>
         <PieChart>
            <Pie
                data={doctorDemandData}
                dataKey="demand"
                nameKey="department"
                cx="50%"
                cy="50%"
                outerRadius={100}
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
)

export default Dashboard