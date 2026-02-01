import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />} />
          <Route path="/user-login" element={<UserLogin setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />} />
          <Route path="/admin-dashboard" element={isAuthenticated && userRole === 'admin' ? <AdminDashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
          <Route path="/user-dashboard" element={isAuthenticated && userRole === 'user' ? <UserDashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;