import "./followups.css";
import { useState } from "react";

const tabs = [
  { key: "today", label: "Today Follow-ups", count: 24 },
  { key: "tomorrow", label: "Tomorrow", count: 18 },
  { key: "planned", label: "Planned", count: 42 },
  { key: "missed", label: "Missed", count: 8 },
  { key: "done", label: "Done", count: 156 },
];

const followUps = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  name: "Amit Kumar",
  course: "MBA - Marketing",
  date: "Jan 18, 2024",
  time: "10:00 AM",
}));

const FollowUps = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="followups-page">

   

      {/* TABS */}
      <div className="followup-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="followup-grid">
        {followUps.map(item => (
          <div className="followup-card" key={item.id}>

            <div className="card-top">
              <div className="avatar">AK</div>

              <div className="lead-info">
                <h4>{item.name}</h4>
                <span>{item.course}</span>
              </div>

              <button className="call-btn">📞</button>
            </div>

            <div className="card-meta">
              <div>📅 {item.date}</div>
              <div>⏰ {item.time}</div>
            </div>

            <div className="card-actions">
              <button className="done-btn">✔ Done</button>
              <button className="reschedule-btn">⏱ Reschedule</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default FollowUps;
