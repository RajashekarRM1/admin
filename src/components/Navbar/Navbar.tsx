import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* ================= TOP BAR ================= */}
      <div className="navbar-top">
        {/* Brand */}
        <div className="navbar-brand">
          <div className="logo">🎓</div>
          <div>
            <h1>AdmitFlow</h1>
            <p>Lead Management System</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <div className="notification-pill">
            🔔 <span>3 New Notifications</span>
          </div>

          <div className="user-info">
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin"
              className="avatar"
            />
            <div>
              <strong>Admin User</strong>
              <p>admin@admitflow.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ROLE BUTTONS ================= */}
      <div className="navbar-bottom">
        <NavLink to="/admin" className="role-btn">
          👤 Admin
        </NavLink>
        <NavLink to="/employee" className="role-btn">
          👥 Employee
        </NavLink>
        <NavLink to="/teamlead" className="role-btn">
          👥 Team Lead
        </NavLink>
        <NavLink to="/closure" className="role-btn">
          ✔ Closure Team
        </NavLink>
        <NavLink to="/eod" className="role-btn">
          📊 EOD Report
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
