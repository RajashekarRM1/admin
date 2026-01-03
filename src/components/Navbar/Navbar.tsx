import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-brand">
        <div className="brand-icon">👥</div>
        <div>
          <h2>Smart CRM</h2>
          <p>Counselor Panel</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className="menu-item">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/teamlead" className="menu-item">
          👥 Leads
        </NavLink>

        <NavLink to="/followups" className="menu-item">
          📅 Follow-ups
        </NavLink>

        <NavLink to="/activities" className="menu-item">
          📊 Activities
        </NavLink>

        <NavLink to="/reports" className="menu-item">
          📄 Reports
        </NavLink>
      </nav>
    </aside>
  );
};

export default Navbar;
