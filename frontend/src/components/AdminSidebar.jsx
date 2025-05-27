import React from "react";
import { BiCog, BiHome, BiUser } from "react-icons/bi";
import { BsActivity, BsBox } from "react-icons/bs";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaFileAlt,
  FaCog,
  FaAngrycreative,
} from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2>IWB</h2>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <BiHome className="icon" />
          <span>Home</span>
        </Link>
        <Link to="/dashboard" className="sidebar-link">
          <BsActivity className="icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/users" className="sidebar-link">
          <BiUser className="icon" />
          <span>Users</span>
        </Link>
        <Link to="/admin-inventory" className="sidebar-link">
          <BsBox className="icon" />
          <span>Products</span>
        </Link>
        <Link to="/income-statements" className="sidebar-link">
          <FiLayout className="icon" />
          <span>Income Statements</span>
        </Link>
        <Link to="/settings" className="sidebar-link">
          <BiCog className="icon" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;