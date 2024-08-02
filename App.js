import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Order from './components/Order';
import Payment from './components/Payment';
import Login from './components/Login';
import NavigationBar from './components/Navbar'; // Ensure the correct file name
import AdminDashboard from './components/AdminDashboard';
import Feedback from './components/Feedback';
 // Ensure this file exists and is correctly named

const App = () => {
  return (
    <Router>
      <NavigationBar /> {/* Add NavigationBar here if it's a global component */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/feedback" element={<Feedback />} />
        
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
