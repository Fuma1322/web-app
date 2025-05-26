import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "./AdminSidebar";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {

  return (
    <div className="dashboardd">
      <AdminSidebar />
      <main className="admin-main">
        <section className="admin-overview">
          <motion.div className="overview-card" whileHover={{ scale: 1.05 }}>
            <h3>Total Users</h3>
            <p>152</p>
          </motion.div>
          <motion.div className="overview-card" whileHover={{ scale: 1.05 }}>
            <h3>Products</h3>
            <p>89</p>
          </motion.div>
          <motion.div className="overview-card" whileHover={{ scale: 1.05 }}>
            <h3>Reports</h3>
            <p>37</p>
          </motion.div>
        </section>

        <section className="admin-activity">
          <h2>Recent Activity</h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <li>User Kenneth updated Inventory</li>
            <li>New Partner Application submitted</li>
            <li>Thato added a new Desktop</li>
          </motion.ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;