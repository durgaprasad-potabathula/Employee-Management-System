import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/UserDashboard.module.css';

const UserDashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const employee = { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'Developer', salary: 50000 }; // Mock user data

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>User Dashboard</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </header>
      <main className={styles.main}>
        <h2>Your Employee Details</h2>
        <div className={styles.details}>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Role:</strong> {employee.role}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;