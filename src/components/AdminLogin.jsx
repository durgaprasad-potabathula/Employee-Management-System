import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/AdminLogin.module.css';

const AdminLogin = ({ setIsAuthenticated, setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      toast.success('Admin login successful ✅', {
        position: 'top-right',
        autoClose: 2000,
      });

      setTimeout(() => {
        setIsAuthenticated(true);
        setUserRole('admin');
        navigate('/admin-dashboard');
      }, 2000);
    } else {
      toast.error('Invalid credentials ❌', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />

      <form className={styles.form} onSubmit={handleLogin}>
        <h1>Admin Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
