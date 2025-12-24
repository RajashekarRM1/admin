import { useRef, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleRemove = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          🏠 <span>Admin</span> / <b>Data Import</b>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="card">
            <div>
              <p>Total Leads Imported</p>
              <h2>2,847</h2>
              <span className="stat green">↑ 12% from last week</span>
            </div>
            <div className="icon blue">🗄</div>
          </div>

          <div className="card">
            <div>
              <p>Assigned Leads</p>
              <h2>2,404</h2>
              <span className="stat blue">✔ 84% assignment rate</span>
            </div>
            <div className="icon green">👤</div>
          </div>

          <div className="card">
            <div>
              <p>Unassigned Leads</p>
              <h2>443</h2>
              <span className="stat orange">⚠ Pending distribution</span>
            </div>
            <div className="icon orange">⏱</div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="upload-section">
          <div className="steps">
            <div className="step active">1</div>
            <div className="line" />
            <div className="step">2</div>
            <div className="line" />
            <div className="step">3</div>

            <div className="step-text">Step <b>1</b> of 3</div>
          </div>

          <h2>Upload Excel File</h2>
          <p className="subtitle">Upload your student leads data file</p>

          <div
            className="upload-box"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="cloud">☁️</div>
            <h3>Drag & drop your file here</h3>
            <p>or click to browse</p>

            <button>Select File</button>

            <span className="formats">
              Supported formats: CSV, XLSX, XLS (Max 10MB)
            </span>

            <input
              ref={fileInputRef}
              type="file"
              hidden
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
            />
          </div>

          {file && (
            <div className="file-preview">
              <div className="file-left">
                <div className="excel-icon">📄</div>
                <div>
                  <strong>{file.name}</strong>
                  <p>{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                </div>
              </div>
              <button className="remove" onClick={handleRemove}>✕</button>
            </div>
          )}

          <div className="actions">
            <button className="outline">⬇ Download Template</button>
            <button className="primary" disabled={!file}>
              Next: Column Mapping →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
