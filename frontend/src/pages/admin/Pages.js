import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1>Welcome to Pages</h1>
      <p>Use the sidebar to navigate between sections.</p>
      <a href="/admin/edit-home">HOME PAGE</a>
    </AdminLayout>
  );
}
