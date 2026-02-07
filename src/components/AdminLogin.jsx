import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/AdminLogin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminLogin = ({ setIsAuthenticated, setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      toast.success('Admin login successful');

      setTimeout(() => {
        setIsAuthenticated(true);
        setUserRole('admin');
        navigate('/admin-dashboard');
      }, 2000);
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

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
