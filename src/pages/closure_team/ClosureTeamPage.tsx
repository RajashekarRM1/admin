import "./ClosureTeamPage.css";

const ClosureTeamPage = () => {
  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-container">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          🏠 <span>Closure Team</span> / <b>Positive Leads</b>
        </div>

        {/* Header */}
        <h1>Positive Leads for Closure</h1>
        <p className="subtitle">
          Follow up with interested students and complete admissions
        </p>

        {/* FILTER CARD */}
        <div className="filter-card">
          <div className="filter-grid">
            <div>
              <label>College</label>
              <select>
                <option>All Colleges</option>
              </select>
            </div>

            <div>
              <label>Course</label>
              <select>
                <option>MBA</option>
              </select>
            </div>

            <div>
              <label>Assigned Employee</label>
              <select>
                <option>Rajesh Kumar</option>
              </select>
            </div>

            <div>
              <label>Closure Status</label>
              <select>
                <option>All Status</option>
              </select>
            </div>
          </div>

          <div className="filter-actions">
            <button className="outline">Reset Filters</button>
            <button className="primary">Apply Filters</button>
          </div>
        </div>

        {/* TABLE CARD */}
        <div className="table-card">
          <div className="table-header">
            <div>
              <h3>Positive Leads</h3>
              <p>542 total positive leads</p>
            </div>

            <button className="success">
              ✔ Mark Selected as Closed
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Student Name</th>
                <th>Phone</th>
                <th>College</th>
                <th>Course</th>
                <th>Assigned By</th>
                <th>Closure Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="user">
                    <div className="avatar green">I</div>
                    Ishaan Verma
                  </div>
                </td>
                <td>+91 98765 43220</td>
                <td>IIT Bombay</td>
                <td>
                  <span className="tag">B.Tech</span>
                  <span className="tag">CSE</span>
                </td>
                <td>Rajesh Kumar</td>
                <td><span className="status green">Ready for Closure</span></td>
                <td className="actions-cell">
                  <button className="btn green">✔ Close</button>
                  <button className="btn blue">📞 Call</button>
                  <button className="btn orange">🔁</button>
                </td>
              </tr>

              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="user">
                    <div className="avatar green">A</div>
                    Ananya Singh
                  </div>
                </td>
                <td>+91 98765 43221</td>
                <td>BITS Pilani</td>
                <td><span className="tag">B.E</span></td>
                <td>Priya Sharma</td>
                <td><span className="status green">Ready for Closure</span></td>
                <td className="actions-cell">
                  <button className="btn green">✔ Close</button>
                  <button className="btn blue">📞 Call</button>
                  <button className="btn orange">🔁</button>
                </td>
              </tr>

              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="user">
                    <div className="avatar green">R</div>
                    Rohan Chatterjee
                  </div>
                </td>
                <td>+91 98765 43222</td>
                <td>IIM Ahmedabad</td>
                <td><span className="tag">MBA</span></td>
                <td>Amit Patel</td>
                <td><span className="status orange">Follow-up</span></td>
                <td className="actions-cell">
                  <button className="btn green">✔ Close</button>
                  <button className="btn blue">📞 Call</button>
                  <button className="btn orange">🔁</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ClosureTeamPage;
