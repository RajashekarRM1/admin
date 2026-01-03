import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import "./Reports.css";

/* ---------- DATA ---------- */

const leadsPerDay = [
  { day: "Mon", leads: 45 },
  { day: "Tue", leads: 52 },
  { day: "Wed", leads: 38 },
  { day: "Thu", leads: 48 },
  { day: "Fri", leads: 55 },
  { day: "Sat", leads: 42 },
  { day: "Sun", leads: 35 },
];

const leadStatusData = [
  { name: "New", value: 35 },
  { name: "Contacted", value: 28 },
  { name: "Qualified", value: 22 },
  { name: "Converted", value: 15 },
];

const followUpTrends = [
  { week: "Week 1", scheduled: 85, completed: 78 },
  { week: "Week 2", scheduled: 92, completed: 85 },
  { week: "Week 3", scheduled: 88, completed: 82 },
  { week: "Week 4", scheduled: 95, completed: 88 },
];

const PIE_COLORS = ["#3b82f6", "#fbbf24", "#10b981", "#8b5cf6"];

/* ---------- COMPONENT ---------- */

const Reports: React.FC = () => {
  return (
    <div className="reports-page">

      {/* ===== FILTER CARD ===== */}
      <div className="reports-filter-card">
        <h2 className="reports-title">Day-wise Leads Report</h2>

        <div className="reports-filters-grid">
          <div className="filter-input">
            <input type="text" placeholder="dd-mm-yyyy" />
            <span className="calendar-icon">📅</span>
          </div>

          <div className="filter-input">
            <input type="text" placeholder="dd-mm-yyyy" />
            <span className="calendar-icon">📅</span>
          </div>

          <select className="filter-select">
            <option>All Counselors</option>
            <option>John Doe</option>
            <option>Jane Smith</option>
          </select>

          <button className="export-btn">⬇ Export Report</button>
        </div>
      </div>

      {/* ===== TOP CHARTS ===== */}
      <div className="reports-charts">

        <div className="chart-card">
          <h3 className="chart-title">Leads per Day</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadsPerDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="leads" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Lead Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadStatusData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                dataKey="value"
              >
                {leadStatusData.map((_, index) => (
                  <Cell key={index} fill={PIE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ===== FOLLOW-UP TRENDS ===== */}
      <div className="chart-card followup-card">
        <h3 className="chart-title">Follow-up Trends</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={followUpTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="scheduled"
              stroke="#3b82f6"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#10b981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Reports;
