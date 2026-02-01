import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Select Login Type</h1>
      <div className={styles.options}>
        <button className={styles.btn} onClick={() => navigate('/admin-login')}>
          Admin Login
        </button>
        <button className={styles.btn} onClick={() => navigate('/user-login')}>
          User Login
        </button>
      </div>
    </div>
  );
};

export default Login;