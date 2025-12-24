import "./TeamLeadDashboard.css";

const TeamLeadDashboard = () => {
  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-container">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          🏠 <span>Team Lead</span> / <b>Team Overview</b>
        </div>

        {/* Header */}
        <h1>Team Overview</h1>
        <p className="subtitle">
          Monitor team performance and call outcomes
        </p>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <div>
              <p>Total Calls</p>
              <h2>1,847</h2>
            </div>
            <div className="icon blue">📞</div>
          </div>

          <div className="card">
            <div>
              <p>Positive Responses</p>
              <h2 className="green-text">542</h2>
            </div>
            <div className="icon green">👍</div>
          </div>

          <div className="card">
            <div>
              <p>Negative Responses</p>
              <h2 className="red-text">823</h2>
            </div>
            <div className="icon red">👎</div>
          </div>

          <div className="card">
            <div>
              <p>Callbacks</p>
              <h2 className="orange-text">482</h2>
            </div>
            <div className="icon orange">🔁</div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="charts">
          <div className="chart-card">
            <h3>Call Outcomes Distribution</h3>
            <div className="chart-placeholder">📊 Donut Chart</div>
          </div>

          <div className="chart-card">
            <h3>Employee Performance</h3>
            <div className="chart-placeholder">📈 Bar Chart</div>
          </div>
        </div>

        {/* TABLE */}
        <div className="table-card">
          <h3>Employee Performance Breakdown</h3>

          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Assigned</th>
                <th>Called</th>
                <th className="green-text">Positive</th>
                <th className="red-text">Negative</th>
                <th className="orange-text">Callback</th>
                <th>Completion</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rajesh Kumar</td>
                <td>63</td>
                <td>58</td>
                <td className="green-text">22</td>
                <td className="red-text">28</td>
                <td className="orange-text">8</td>
                <td>
                  <div className="progress">
                    <div style={{ width: "92%" }} />
                  </div>
                  92%
                </td>
              </tr>

              <tr>
                <td>Priya Sharma</td>
                <td>63</td>
                <td>61</td>
                <td className="green-text">25</td>
                <td className="red-text">30</td>
                <td className="orange-text">6</td>
                <td>
                  <div className="progress">
                    <div style={{ width: "97%" }} />
                  </div>
                  97%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ACTIONS */}
        <div className="actions">
          <button className="primary">📄 Generate EOD Report</button>
          <button className="success">⬇ Export Positive Leads</button>
        </div>

      </div>
    </section>
  );
};

export default TeamLeadDashboard;
