import { useState } from "react";
import "./TeamLeadDashboard.css";

type Lead = {
  name: string;
  date: string;
  phone: string;
  email: string;
  course: string;
  status: "New" | "Contacted" | "Qualified" | "Converted";
  counselor: string;
  source: string;
};

const leadsData: Lead[] = [
  {
    name: "Amit Kumar",
    date: "Jan 15, 2024",
    phone: "+91 9876543210",
    email: "amit@email.com",
    course: "MBA",
    status: "Qualified",
    counselor: "John Doe",
    source: "Website",
  },
  {
    name: "Priya Sharma",
    date: "Jan 16, 2024",
    phone: "+91 9876543211",
    email: "priya@email.com",
    course: "BBA",
    status: "New",
    counselor: "Jane Smith",
    source: "Facebook",
  },
  {
    name: "Rahul Verma",
    date: "Jan 17, 2024",
    phone: "+91 9876543212",
    email: "rahul@email.com",
    course: "B.Tech",
    status: "Contacted",
    counselor: "John Doe",
    source: "Instagram",
  },
];

const Leads = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [counselor, setCounselor] = useState("All");

  const filteredLeads = leadsData.filter((lead) => {
    const matchSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search);

    const matchStatus = status === "All" || lead.status === status;
    const matchCounselor = counselor === "All" || lead.counselor === counselor;

    return matchSearch && matchStatus && matchCounselor;
  });

  return (
    <div className="leads-page">
      {/* FILTERS */}
      <div className="leads-filters">
        <div className="search-box">
          <span>🔍</span>
          <input
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Converted">Converted</option>
        </select>

        <select
          value={counselor}
          onChange={(e) => setCounselor(e.target.value)}
        >
          <option value="All">All Counselors</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
        </select>

        <input type="date" />

        <button className="primary-btn">+ Add Lead</button>
      </div>

      {/* TABLE */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>LEAD NAME</th>
              <th>CONTACT</th>
              <th>COURSE</th>
              <th>STATUS</th>
              <th>COUNSELOR</th>
              <th>SOURCE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead, i) => (
              <tr key={i}>
                <td>
                  <div className="lead-name">
                    <div className="avatar">{lead.name[0]}</div>
                    <div>
                      <strong>{lead.name}</strong>
                      <span>{lead.date}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="contact">
                    <span>{lead.phone}</span>
                    <small>{lead.email}</small>
                  </div>
                </td>

                <td>{lead.course}</td>

                <td>
                  <span className={`badge ${lead.status.toLowerCase()}`}>
                    {lead.status}
                  </span>
                </td>

                <td>{lead.counselor}</td>
                <td>{lead.source}</td>

                <td className="actions">👁️ ✏️ ➕</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="pagination">
          <span>Showing 1 to {filteredLeads.length} leads</span>

          <div className="pages">
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
