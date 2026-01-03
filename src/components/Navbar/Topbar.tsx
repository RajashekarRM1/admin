import { useNavigate } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); // clear login
    navigate("/login");              // redirect
  };

  return (
    <header className="topbar">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your overview</p>
      </div>

      <div className="topbar-actions">
        <span className="icon">🔔</span>
        <span className="icon">🔍</span>

        {/* LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
