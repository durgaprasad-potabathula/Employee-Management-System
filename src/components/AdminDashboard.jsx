import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import styles from './styles/AdminDashboard.module.css';

const AdminDashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'Developer', salary: 50000 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', role: 'Manager', salary: 60000 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
    setShowForm(false);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    setShowForm(false);
    setEditingEmployee(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Admin Dashboard</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </header>
      <main className={styles.main}>
        <button className={styles.addBtn} onClick={() => { setShowForm(true); setEditingEmployee(null); }}>Add Employee</button>
        {showForm && (
          <EmployeeForm
            onSave={editingEmployee ? updateEmployee : addEmployee}
            employee={editingEmployee}
            onCancel={() => setShowForm(false)}
          />
        )}
        <EmployeeList employees={employees} onEdit={setEditingEmployee} onDelete={deleteEmployee} onView={() => {}} />
      </main>
    </div>
  );
};

export default AdminDashboard;