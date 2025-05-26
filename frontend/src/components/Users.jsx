import React from 'react'
import { motion } from "framer-motion";
import Thabo from "./us/Thabo.jpg";
import Kay from "./us/Kay.jpg";
import Mamosa from "./us/Mamosa.jpg";
import Micasa from "./us/Micasa.jpg";
import AdminSidebar from './AdminSidebar';

export default function Users() {
  return (
    <div className="admin-page">
        <AdminSidebar />
    <div className="admin-section">
          <h2>Admins</h2>
          <div className="admin-cards">
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src={Thabo} alt="Thabo Tlou" />
              <h4>Thabo Tlou</h4>
              <p>Founder & CTO</p>
            </motion.div>
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src={Micasa} alt="Thato Chelane" />
              <h4>Thato Chelane</h4>
              <p>Founder & CTO</p>
            </motion.div>
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src={Mamosa} alt="Mamosa Motsie" />
              <h4>Mamosa Motsie</h4>
              <p>Co-Founder & Operations</p>
            </motion.div>
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src={Kay} alt="Keletso Hato" />
              <h4>Keletso Hato</h4>
              <p>Head of Security</p>
            </motion.div>
          </div>
        </div>
    </div>
  )
}
