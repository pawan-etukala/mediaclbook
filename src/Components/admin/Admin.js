import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import AdminDashboard from "./pages/AdminDashboard";
import AddSubChapter from "./pages/AddSubChapter";
import AddChapter from "./pages/AddChapter";
import AddImage from "./pages/AddImage";
import Order from "./pages/Order";
import Setting from "./pages/Setting";
import SideBar from "./SideBar";
import UpdateImage from "./pages/UpdateImage";

import "../../css/Admin.css";

function Admin() {
  return (
    <SideBar>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/addchapter" element={<AddChapter />} />
        <Route path="/addsubchapter" element={<AddSubChapter />} />
        <Route path="/addimage" element={<AddImage />} />
        <Route path="/updateimage" element={<UpdateImage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/order" element={<Order />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </SideBar>
  );
}

export default Admin;
