import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  return (
    <div className="admin-layout">
   
      {/* ============ RIGHT MAIN CONTENT ============ */}
      <div className="admin-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          🏠 <span>Employee</span> / <b>My Assigned Leads</b>
        </div>

        <div className="stats">
          <div className="card">
            <div>
              <p>Today's Leads</p>
              <h2>63</h2>
              <span className="blue">Assigned today</span>
            </div>
            <div className="icon blue">📋</div>
          </div>

          <div className="card">
            <div>
              <p>Completed Calls</p>
              <h2>28</h2>
              <span className="green">✔ 44% completion</span>
            </div>
            <div className="icon green">📞</div>
          </div>

          <div className="card">
            <div>
              <p>Pending Calls</p>
              <h2>35</h2>
              <span className="orange">Remaining today</span>
            </div>
            <div className="icon orange">⏱</div>
          </div>
        </div>

        {/* ================= ASSIGNED LEADS TABLE ================= */}
        <div className="table-card">
          <div className="table-header">
            <h2>Assigned Leads</h2>

            <div className="table-actions">
              <input
                type="text"
                placeholder="Search leads..."
                className="search-input"
              />
              <button className="filter-btn">🔽 Filter</button>
            </div>
          </div>

          <table className="leads-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Phone</th>
                <th>Course</th>
                <th>College</th>
                <th>Call Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="student">
                    <div className="avatar">A</div>
                    Aarav Gupta
                  </div>
                </td>
                <td>+91 98765 43210</td>
                <td>
                  <span className="tag">B.Tech</span>
                  <span className="tag">CSE</span>
                </td>
                <td>IIT Delhi</td>
                <td><span className="status pending">Pending</span></td>
                <td className="actions-cell">
                  <button className="btn call">📞 Call</button>
                  <button className="btn like">👍</button>
                  <button className="btn dislike">👎</button>
                  <button className="btn recall">🔁</button>
                  <button className="btn mute">🔇</button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="student">
                    <div className="avatar">D</div>
                    Diya Kapoor
                  </div>
                </td>
                <td>+91 98765 43211</td>
                <td><span className="tag">MBA</span></td>
                <td>IIM Bangalore</td>
                <td><span className="status pending">Pending</span></td>
                <td className="actions-cell">
                  <button className="btn call">📞 Call</button>
                  <button className="btn like">👍</button>
                  <button className="btn dislike">👎</button>
                  <button className="btn recall">🔁</button>
                  <button className="btn mute">🔇</button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="student">
                    <div className="avatar">K</div>
                    Kabir Joshi
                  </div>
                </td>
                <td>+91 98765 43214</td>
                <td>
                  <span className="tag">B.Tech</span>
                  <span className="tag">Mechanical</span>
                </td>
                <td>NIT Trichy</td>
                <td><span className="status positive">Positive</span></td>
                <td className="actions-cell">
                  <button className="btn call">📞 Call</button>
                  <button className="btn like">👍</button>
                  <button className="btn dislike">👎</button>
                  <button className="btn recall">🔁</button>
                  <button className="btn mute">🔇</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= QUICK NOTES ================= */}
        <div className="notes-card">
          <div className="notes-header">
            <h2>Quick Notes</h2>
            <span className="autosave">Auto-saved</span>
          </div>

          <textarea
            className="notes-box"
            placeholder="Add notes about the call..."
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
