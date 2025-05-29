import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { label: 'Dashboard', icon: '🏠', path: '/admin/dashboard' },
    { label: 'Pages', icon: '✍️', path: '/admin/pages' },
    { label: 'Settings', icon: '⚙️', path: '/admin/settings' },
  ];

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
        }}
      >
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

        <nav style={{ flexGrow: 1, paddingTop: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map(({ label, icon, path }) => (
              <li key={path} style={{ whiteSpace: 'nowrap' }}>
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
                  })}
                  title={label}
                >
                  <span style={{ marginRight: sidebarOpen ? '10px' : '0', fontSize: '1.2rem' }}>
                    {icon}
                  </span>
                  {sidebarOpen && <span>{label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <footer style={{ padding: '1rem', borderTop: '1px solid #444', fontSize: '0.8rem', textAlign: 'center' }}>
          {sidebarOpen ? "© 2025 Can'twait2say" : '©'}
        </footer>
      </aside>

      {/* Main content */}
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
