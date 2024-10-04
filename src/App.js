// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndServices from "./Components/TermsAndServices";
import ReturnPolicy from "./Components/ReturnPolicy";
import ShoppingPolicy from "./Components/ShoppingPolicy";
import Afterlogin from "./Components/AfterLogin";
import Cart from "./Components/cart";
import Admin from "./Components/admin/Admin";
import AdminLogin from "./Components/AdminLogin";
import logo from "./Assets/homeo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/*" element={<Admin />} /> {/* Admin Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndServices" element={<TermsAndServices />} />
        <Route path="/Returnpolicy" element={<ReturnPolicy />} />
        <Route path="/ShoppingPolicy" element={<ShoppingPolicy />} />
        <Route
          path="/Afterlogin"
          element={
            <Afterlogin
              logo={logo}
              title="The essentials of materia medica"
              author="Shiva Kumar Reddy Methuku"
              price="539₹"
              view="view"
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <Cart
              img={logo}
              title="Cart"
              title2="The essentials of materia medica"
              author="Shiva Kumar Reddy Methuku"
              price="539₹"
              isbn="9789334035162"
              quantity={<input type="number" name="quantity" value={1} />}
              remove="remove"
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
