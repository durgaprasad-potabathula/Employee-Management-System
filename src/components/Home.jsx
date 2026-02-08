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
          {/* <h2>Welcome to the Employee Management System</h2> */}
          <p>
            The Employee Management System is a web-based application developed to manage employee information efficiently in an organization. The system provides a centralized platform for storing, updating, and retrieving employee details such as personal information, job role, salary, and contact details. It reduces manual paperwork, improves data accuracy, and enhances organizational productivity. The system is developed using ReactJS for the frontend and Spring Boot for the backend, with MySQL as the database. 
            </p><br />
            <p>
              The System automates the process of managing employee data and provides a secure and efficient way to store and access employee records. The system allows administrators to manage employee details and employees to view their personal information through a web-based interface.
            </p>
        </div><br />
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
