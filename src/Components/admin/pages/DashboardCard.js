// DashboardCard.js
import React from "react";
import { motion } from "framer-motion";

const DashboardCard = ({ title, icon, count, description }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
      <div className="card shadow-sm">
        <div className="card-body d-flex align-items-center ">
          <div className="icon me-3">{icon}</div>
          <div>
            <h5 className="card-title">{title}</h5>
            <h3 className="card-count">{count}</h3>
            <p className="card-description">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
