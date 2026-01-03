import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Navbar/Topbar";
import NeedHelp from "./components/Needhelp/NeedHelp";

import AdminDashboard from "./pages/admin/AdminDashboard";
import EmployeeDashboard from "./pages/employees/EmployeDashboard";
import TeamLeadDashboard from "./pages/teamlead/TeamLeadDashboard";
import ClosureTeamPage from "./pages/closure_team/ClosureTeamPage";
import EODReport from "./pages/EOD_Report/EODReport";
import FollowUps from "./pages/followups/follow_ups";
import Activities from "./pages/activities/Activities";
import Reports from "./pages/reports/Reports";

import Auth from "./auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";
import { isAuthenticated } from "./authUtils";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===== PUBLIC ROUTES ===== */}
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Auth />}
        />
        <Route
          path="/register"
          element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Auth />}
        />

        {/* ===== PROTECTED ROUTES ===== */}
        <Route element={<ProtectedRoute />}>
          <Route
            element={
              <>
                <Navbar />
                <Topbar />
                <main className="main-content">
                  <Outlet />
                </main>
                <NeedHelp />
              </>
            }
          >
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/employee" element={<EmployeeDashboard />} />
            <Route path="/teamlead" element={<TeamLeadDashboard />} />
            <Route path="/followups" element={<FollowUps />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/closure" element={<ClosureTeamPage />} />
            <Route path="/eod" element={<EODReport />} />
          </Route>
        </Route>

        {/* ===== FALLBACK ===== */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
