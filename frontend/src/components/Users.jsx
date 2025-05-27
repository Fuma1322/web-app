import React from 'react'
import { motion } from "framer-motion";
import AdminSidebar from './AdminSidebar';

export default function Users() {
  return (
    <div className="admin-page">
        <AdminSidebar />
    <div className="admin-section">
          <h2>Admins</h2>
          <div className="admin-cards">
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/images/pic06.jpg" alt="admin01" />
              <h4>John Doe</h4>
              <p>Sytems Architect</p>
            </motion.div>
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/images/pic07.jpg" alt="admin02" />
              <h4>Jane Doe</h4>
              <p>Head of Cybersecurity</p>
            </motion.div>
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/images/pic08.jpg" alt="admin03" />
              <h4>Lebohang Mitchell</h4>
              <p>Founder & CEO</p>
            </motion.div>
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/images/pic09.jpg" alt="admin04" />
              <h4>Patricia Smith</h4>
              <p>Head of Security</p>
            </motion.div>
          </div>
        </div>
    </div>
  )
}
