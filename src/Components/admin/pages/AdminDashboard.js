// Dashboard.js
import React, { useState, useEffect } from "react";
import ReusableCard from "./DashboardCard"; // Import the reusable card component
import PieChartComponent from "./PieChartComponent"; // Import the pie chart component

const AdminDashboard = () => {
  const [userStats, setUserStats] = useState({});
  const [orderStats, setOrderStats] = useState({});
  const [messageStats, setMessageStats] = useState({});

  useEffect(() => {
    // Function to fetch data for users, orders, and messages
    const fetchData = async () => {
      try {
        const usersResponse = await fetch("/api/users"); // Example endpoint
        const ordersResponse = await fetch("/api/orders");
        const messagesResponse = await fetch("/api/messages");

        const usersData = await usersResponse.json();
        const ordersData = await ordersResponse.json();
        const messagesData = await messagesResponse.json();

        setUserStats(usersData);
        setOrderStats(ordersData);
        setMessageStats(messagesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure API is only called once on component mount

  return (
    <div className="container mt-5 ml-5">
      <div className="row">
        {/* Cards */}
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <ReusableCard
            title="Users"
            icon="👤"
            count={userStats.totalUsers || 0}
            description="Total Users"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <ReusableCard
            title="Chapters"
            icon="📚"
            count={userStats.totalChapters || 0}
            description="Total Chapters"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <ReusableCard
            title="Orders"
            icon="🛒"
            count={orderStats.totalOrders || 0}
            description="Total Orders"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <ReusableCard
            title="Messages"
            icon="✉️"
            count={messageStats.totalMessages || 0}
            description="Total Messages"
          />
        </div>
      </div>

      {/* Pie Charts for users, orders, and messages */}
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <PieChartComponent
            title="Users Breakdown"
            data={[
              { name: "Subscribed", value: userStats.subscribed || 0 },
              { name: "Bought Book", value: userStats.boughtBook || 0 },
              { name: "Bought Chapter", value: userStats.boughtChapter || 0 },
            ]}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <PieChartComponent
            title="Order Status"
            data={[
              { name: "Pending", value: orderStats.pending || 0 },
              { name: "Succeeded", value: orderStats.succeeded || 0 },
            ]}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <PieChartComponent
            title="Messages Status"
            data={[
              { name: "Replied", value: messageStats.replied || 0 },
              { name: "Pending Reply", value: messageStats.pendingReply || 0 },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
