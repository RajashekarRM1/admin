import { useRef, useState } from "react";
import "./AdminDashboard.css";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

/* ===== Chart Data ===== */
const donutData = [
  { name: "New", value: 420 },
  { name: "Contacted", value: 300 },
  { name: "Qualified", value: 200 },
  { name: "Lost", value: 120 },
];

const donutColors = ["#3b82f6", "#facc15", "#22c55e", "#ef4444"];

const lineData = [
  { day: "Mon", completed: 12, missed: 2 },
  { day: "Tue", completed: 19, missed: 3 },
  { day: "Wed", completed: 15, missed: 1 },
  { day: "Thu", completed: 22, missed: 2 },
  { day: "Fri", completed: 18, missed: 4 },
  { day: "Sat", completed: 25, missed: 2 },
  { day: "Sun", completed: 20, missed: 3 },
];

const AdminDashboard = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-container">

        {/* ================= STATS ================= */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">👥</div>
            <span className="badge success">+12%</span>
            <p>Total Leads</p>
            <h2>1,248</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">📅</div>
            <span className="badge info">Today</span>
            <p>Today Follow-ups</p>
            <h2>24</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">⚠</div>
            <span className="badge danger">Alert</span>
            <p>Missed Follow-ups</p>
            <h2>8</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">✔</div>
            <span className="badge done">Done</span>
            <p>Done Follow-ups</p>
            <h2>156</h2>
          </div>
        </div>

        {/* ================= ACTIONS + DONUT ================= */}
        <div className="grid-2">
          <div className="card">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <button className="action-btn">➕ Add Lead</button>
              <button className="action-btn">📅 Add Follow-up</button>
            </div>
          </div>

          {/* ===== DONUT CHART ===== */}
          <div className="card chart-card">
            <h3>Leads by Status</h3>

            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={donutData}
                  dataKey="value"
                  innerRadius={75}
                  outerRadius={110}
                  paddingAngle={3}
                >
                  {donutData.map((_, index) => (
                    <Cell key={index} fill={donutColors[index]} />
                  ))}
                </Pie>

                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ================= LINE CHART ================= */}
        <div className="card full chart-card">
          <h3>Follow-up Completion Trend</h3>

          <ResponsiveContainer width="100%" height={340}>
            <LineChart
              data={lineData}
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

              <XAxis
                dataKey="day"
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />

              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                allowDecimals={false}
              />

              <Tooltip />
              <Legend verticalAlign="top" height={30} />

              <Line
                type="monotone"
                dataKey="completed"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 4 }}
              />

              <Line
                type="monotone"
                dataKey="missed"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ================= UPLOAD ================= */}
        <div className="upload-card">
          <h3>Upload Excel File</h3>
          <p className="subtitle">Upload your student leads data file</p>

          <div
            className="upload-box"
            onClick={() => fileInputRef.current?.click()}
          >
            <p>Drag & drop file here</p>
            <button className="primary-btn">Select File</button>

            <input
              ref={fileInputRef}
              type="file"
              hidden
              onChange={(e) =>
                e.target.files && setFile(e.target.files[0])
              }
            />
          </div>

          {file && (
            <div className="upload-actions">
              <span>{file.name}</span>
              <div>
                <button className="outline-btn">Export</button>
                <button className="primary-btn">Download</button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;
