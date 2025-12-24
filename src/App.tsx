
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EmployeeDashboard from "./pages/employees/EmployeDashboard";
import "./App.css";
import NeedHelp from "./components/Needhelp/NeedHelp";
import TeamLeadDashboard from "./pages/teamlead/TeamLeadDashboard";
import ClosureTeamPage from "./pages/closure_team/ClosureTeamPage";
import EODReport from "./pages/EOD_Report/EODReport";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <NeedHelp />

      {/* GLOBAL CONTENT OFFSET */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/teamlead" element={<TeamLeadDashboard />} />
          <Route path="/closure" element={<ClosureTeamPage />} />
          <Route path="/eod" element={<EODReport />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
