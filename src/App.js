
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndServices from './Components/TermsAndServices.js';
import ReturnPolicy from './Components/ReturnPolicy';
import ShoppingPolicy from './Components/ShoppingPolicy';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Afterlogin from './Components/AfterLogin.js';
import logo from './Assets/homeo.jpg'
import View from '../src/Components/View';
import Cart from './Components/cart.js';
function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndServices" element={<TermsAndServices />} />
        <Route path="/Returnpolicy" element={<ReturnPolicy />} />
        <Route path="/ShoppingPolicy" element={<ShoppingPolicy/>}/>
        <Route path="/Afterlogin" element={<Afterlogin logo={logo} title={"The essentails of materia meidca"}author={"shiva kumar reddy methuku"} price={"539₹"} view={"view"} />} />
        <Route path="/Cart" element={<Cart img={logo} title={"Cart"} title2={"The essentails of materia meidca"}author={"shiva kumarn reddy methuku"} price={"539₹"} isbn={"9789334035162"}  quantity={<input type="number" name="quantity" value="qunatity"/>} remove={"remove"}/>}/>
      </Routes>
      {/* <View/>
      <Cart/> */}
      <Footer />
    </Router>
 );
}


export default App;

