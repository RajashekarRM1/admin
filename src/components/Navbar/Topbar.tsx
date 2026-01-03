import { useNavigate, useLocation } from "react-router-dom";
import "./Topbar.css";

const routeTitles: Record<string, { title: string; subtitle: string }> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Welcome back! Here's your overview",
  },
  "/teamlead": {
    title: "Leads",
    subtitle: "Manage and track all leads",
  },
  "/followups": {
    title: "Follow-ups",
    subtitle: "Track scheduled follow-ups",
  },
  "/activities": {
    title: "Activities",
    subtitle: "Monitor daily activities",
  },
  "/reports": {
    title: "Reports",
    subtitle: "View detailed performance reports",
  },
};

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // fallback if route not found
  const currentRoute =
    routeTitles[location.pathname] || {
      title: "Dashboard",
      subtitle: "Welcome back!",
    };

  return (
    <header className="topbar">
      <div>
        <h1>{currentRoute.title}</h1>
        <p>{currentRoute.subtitle}</p>
      </div>

      <div className="topbar-actions">
        <span className="icon">🔔</span>
        <span className="icon">🔍</span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
