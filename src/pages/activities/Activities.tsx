import React from "react";
import "./Activities.css";

const Activities: React.FC = () => {
  return (
    <div className="activities-page">

      {/* ===== TOP SUMMARY CARDS ===== */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span>Total Follow-ups</span>
            <span className="stat-icon blue">📅</span>
          </div>
          <h2 className="stat-number">248</h2>
          <p className="stat-change positive">+18% from last week</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span>Prospect Responses</span>
            <span className="stat-icon green">💬</span>
          </div>
          <h2 className="stat-number">142</h2>
          <p className="stat-change positive">+12% from last week</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span>Re-enquiries</span>
            <span className="stat-icon purple">🔄</span>
          </div>
          <h2 className="stat-number">28</h2>
          <p className="stat-change negative">-5% from last week</p>
        </div>
      </div>

      {/* ===== COUNSELOR-WISE FOLLOW-UP COUNT ===== */}
      <div className="counselor-card">
        <h2 className="section-heading">Counselor-wise Follow-up Count</h2>

        <div className="counselor-row">
          <div className="counselor-left">
            <div className="avatar blue">JD</div>
            <div>
              <p className="name">John Doe</p>
              <p className="role">Senior Counselor</p>
            </div>
          </div>

          <div className="counselor-stats">
            <div>
              <p className="count blue-text">68</p>
              <p className="label">Total</p>
            </div>
            <div>
              <p className="count green-text">52</p>
              <p className="label">Done</p>
            </div>
            <div>
              <p className="count red-text">3</p>
              <p className="label">Missed</p>
            </div>
          </div>
        </div>

        <div className="counselor-row">
          <div className="counselor-left">
            <div className="avatar purple">JS</div>
            <div>
              <p className="name">Jane Smith</p>
              <p className="role">Counselor</p>
            </div>
          </div>

          <div className="counselor-stats">
            <div>
              <p className="count blue-text">54</p>
              <p className="label">Total</p>
            </div>
            <div>
              <p className="count green-text">48</p>
              <p className="label">Done</p>
            </div>
            <div>
              <p className="count red-text">2</p>
              <p className="label">Missed</p>
            </div>
          </div>
        </div>

        <div className="counselor-row">
          <div className="counselor-left">
            <div className="avatar green">MJ</div>
            <div>
              <p className="name">Mike Johnson</p>
              <p className="role">Junior Counselor</p>
            </div>
          </div>

          <div className="counselor-stats">
            <div>
              <p className="count blue-text">42</p>
              <p className="label">Total</p>
            </div>
            <div>
              <p className="count green-text">38</p>
              <p className="label">Done</p>
            </div>
            <div>
              <p className="count red-text">1</p>
              <p className="label">Missed</p>
            </div>
          </div>
        </div>
      </div>


      <div className="recent-activities-card">
  <h2 className="section-heading">Recent Activities</h2>

  {Array.from({ length: 6 }).map((_, index) => (
    <div className="activity-row" key={index}>
      <div className="activity-left">
        <div className="activity-icon">
          📞
        </div>

        <div className="activity-text">
          <p className="activity-title">Follow-up call completed</p>
          <p className="activity-subtitle">
            John Doe completed follow-up with Amit Kumar
          </p>
        </div>
      </div>

      <div className="activity-time">2 hours ago</div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Activities;
