import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/UserLogin.module.css';

const UserLogin = ({ setIsAuthenticated, setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'user') {
      setIsAuthenticated(true);
      setUserRole('user');
      navigate('/user-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h1>User Login</h1>
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
        <button type="submit" className={styles.btn}>Login</button>
      </form>
    </div>
  );
};

export default UserLogin;