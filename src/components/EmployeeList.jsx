import React from 'react';
import styles from './styles/EmployeeList.module.css';

const EmployeeList = ({ employees, onEdit, onDelete, onView }) => {
  return (
    <div className={styles.list}>
      <h2>Employee List</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.role}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => onView(emp)}>View</button>
                <button onClick={() => onEdit(emp)}>Update</button>
                <button onClick={() => onDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
