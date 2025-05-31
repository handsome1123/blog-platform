import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1>Welcome to Pages</h1>
      <p>Use the sidebar to navigate between sections.</p>
      <ul>
        <li><a href="/admin/edit-home">HOME PAGE</a></li>
        <li><a href="/admin/edit-about">ABOUT US PAGE</a></li>
        <li><a href="/admin/edit-blog">BLOG PAGE</a></li>
        <li><a href="/admin/edit-vlog">VLOG PAGE</a></li>
      </ul>
    </AdminLayout>
  );
}
