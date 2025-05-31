import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', icon: '🏠', path: '/admin/dashboard' },
    { label: 'Pages', icon: '✍️', path: '/admin/pages' },
    { label: 'Posts', icon: '📝', path: '/admin/posts' },
    { label: 'Settings', icon: '⚙️', path: '/admin/settings' },
  ];

    const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // ensures cookies like adminToken are sent
      });
      // Optional: also clear localStorage token if you're using one
      localStorage.removeItem('token');

      // Redirect to login
      window.location.href = '/login';
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? '250px' : '60px',
          backgroundColor: '#222',
          color: '#fff',
          transition: 'width 0.3s ease',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: '1rem',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            borderBottom: '1px solid #444',
            cursor: 'pointer',
            userSelect: 'none',
          }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          title={sidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
        >
          {sidebarOpen ? 'Admin Panel' : 'AP'}
        </div>

        {/* Navigation Menu */}
        <nav style={{ flexGrow: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map(({ label, icon, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.8rem 1rem',
                    color: isActive ? '#00aaff' : '#ccc',
                    textDecoration: 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    backgroundColor: isActive ? '#111' : 'transparent',
                    whiteSpace: 'nowrap',
                  })}
                  title={label}
                >
                  <span
                    style={{
                      marginRight: sidebarOpen ? '10px' : '0',
                      fontSize: '1.2rem',
                    }}
                  >
                    {icon}
                  </span>
                  {sidebarOpen && <span>{label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout and Footer */}
        <div>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '0.8rem 1rem',
              backgroundColor: '#ff4d4d',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Logout
          </button>
          <footer
            style={{
              padding: '1rem',
              borderTop: '1px solid #444',
              fontSize: '0.8rem',
              textAlign: 'center',
            }}
          >
            {sidebarOpen ? "© 2025 Can'twait2say" : '©'}
          </footer>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        style={{
          flexGrow: 1,
          background: '#f9f9f9',
          padding: '1.5rem',
          overflowY: 'auto',
        }}
      >
        {children}
      </main>
    </div>
  );
}
