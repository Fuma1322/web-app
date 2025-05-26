import React from "react";
import { BiUser } from "react-icons/bi";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2>IWB</h2>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className="sidebar-link">
          <FaTachometerAlt className="icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/users" className="sidebar-link">
          <BiUser className="icon" />
          <span>Users</span>
        </Link>
        <Link to="/admin-inventory" className="sidebar-link">
          <FaBoxOpen className="icon" />
          <span>Products</span>
        </Link>
        <Link to="/income-statements" className="sidebar-link">
          <FaFileAlt className="icon" />
          <span>Income Statements</span>
        </Link>
        <Link to="/settings" className="sidebar-link">
          <FaCog className="icon" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;