import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import styles from './styles/AdminDashboard.module.css';

const AdminDashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [viewEmployee, setViewEmployee] = useState(null);

  const navigate = useNavigate();

  // Load data
  useEffect(() => {
    const stored = localStorage.getItem('employees');
    if (stored) {
      setEmployees(JSON.parse(stored));
    } else {
      setEmployees([
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          phone: '1234567890',
          role: 'Developer',
          salary: 50000,
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          phone: '9876543210',
          role: 'Manager',
          salary: 60000,
        },
      ]);
    }
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
    setShowForm(false);
  };

  // ✅ UPDATE TOAST
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map(emp =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );

    toast.success('Updated successfully ✅', {
      position: 'top-right',
      autoClose: 2000,
      theme: 'colored',
    });

    setEditingEmployee(null);
    setShowForm(false);
  };

  // ✅ DELETE TOAST
  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));

    toast.success('Deleted successfully 🗑️', {
      position: 'top-right',
      autoClose: 2000,
      theme: 'colored',
    });

    if (viewEmployee?.id === id) {
      setViewEmployee(null);
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
    setViewEmployee(null);
  };

  const handleView = (employee) => {
    setViewEmployee(employee);
    setShowForm(false);
    setEditingEmployee(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Admin Dashboard</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Toastify container (required once) */}
      <ToastContainer />

      <main className={styles.main}>
        <button
          className={styles.addBtn}
          onClick={() => {
            setShowForm(true);
            setEditingEmployee(null);
            setViewEmployee(null);
          }}
        >
          Add Employee
        </button>

        {showForm && (
          <EmployeeForm
            employee={editingEmployee}
            onSave={editingEmployee ? updateEmployee : addEmployee}
            onCancel={() => setShowForm(false)}
          />
        )}

        {viewEmployee && (
          <div className={styles.profileCard}>
            <h2>Employee Profile</h2>
            <p><strong>Name:</strong> {viewEmployee.name}</p>
            <p><strong>Email:</strong> {viewEmployee.email}</p>
            <p><strong>Phone:</strong> {viewEmployee.phone}</p>
            <p><strong>Role:</strong> {viewEmployee.role}</p>
            <p><strong>Salary:</strong> ₹{viewEmployee.salary}</p>

            <button
              className={styles.closeBtn}
              onClick={() => setViewEmployee(null)}
            >
              Close
            </button>
          </div>
        )}

        <EmployeeList
          employees={employees}
          onEdit={handleEdit}
          onDelete={deleteEmployee}
          onView={handleView}
        />
      </main>
    </div>
  );
};

export default AdminDashboard;
