import React, { useState } from "react";
import "../styles/adminSettings.css";
import AdminSidebar from "../components/AdminSidebar";

const AdminSettings = () => {
  const [backupEnabled, setBackupEnabled] = useState(false);
  const [adminName, setAdminName] = useState("John Doe");
  const [email, setEmail] = useState("doe@example.com");
  const [systemStatus, setSystemStatus] = useState("Running smoothly");

  const toggleBackup = () => setBackupEnabled(!backupEnabled);

  const handleSystemReset = () => {
    alert("System Resetting...");
    setSystemStatus("Resetting...");
  };

  return (
    <div className="admin-settings-container">
      <AdminSidebar />
      <div className="settings-content">
        <h1 className="settings-title">Settings</h1>

        <div className="settings-section">
          <h2 className="section-title">Admin Profile</h2>
          <div className="form-item">
            <label>Name</label>
            <input
              type="text"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">System Settings</h2>
          <div className="form-item toggle">
            <label>Auto Backup</label>
            <div className="toggle-container">
              <input
                type="checkbox"
                checked={backupEnabled}
                onChange={toggleBackup}
                id="backup"
              />
              <label htmlFor="backup" className="toggle-switch"></label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">System Status</h2>
          <div className="form-item">
            <p>
              Status: <span className="status-text">{systemStatus}</span>
            </p>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">Data Management</h2>
          <div className="form-item">
            <button className="btn backup-btn">
              {backupEnabled ? "Backup Enabled" : "Backup Now"}
            </button>
          </div>
          <div className="form-item">
            <button className="btn reset-btn" onClick={handleSystemReset}>
              Reset System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
