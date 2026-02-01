import React, { useState, useEffect } from 'react';
import styles from './styles/EmployeeForm.module.css';

const EmployeeForm = ({ onSave, employee, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', salary: '' });

  useEffect(() => {
    if (employee) setFormData(employee);
  }, [employee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{employee ? 'Update Employee' : 'Add Employee'}</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
      <input name="salary" type="number" placeholder="Salary" value={formData.salary} onChange={handleChange} required />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EmployeeForm;