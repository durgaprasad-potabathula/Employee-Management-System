import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.description}>
          <h2>Welcome to the Employee Management System</h2>
          <p>
            Efficiently manage employee records with our intuitive system. Store data securely in MySQL, host profile pictures on AWS S3, and enjoy a seamless experience with ReactJS frontend and Spring Boot APIs. Simplify HR tasks with features like adding, updating, and viewing employee details.
          </p>
        </div><br /><br />
        <button className={styles.loginBtn} onClick={() => navigate('/login')}>
          Login
        </button>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 Employee Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
