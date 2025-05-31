import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaBox, FaCog } from 'react-icons/fa';
import './AdminSidebar.css'; // Import the CSS file

const links = [
  { label: 'Dashboard', icon: FaTachometerAlt, path: '/admin/dashboard' },
  { label: 'Users', icon: FaUsers, path: '/admin/users' },
  { label: 'Posts', icon: FaBox, path: '/admin/posts' },
  { label: 'Settings', icon: FaCog, path: '/admin/settings' },
];

export default function AdminSidebar({children}) {
  const location = useLocation();

  return (
    <aside className="admin-sidebar">
      <h1 className="admin-sidebar-title">Admin Panel</h1>
      <ul className="admin-sidebar-nav"> 
        {links.map(({ label, icon: Icon, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={`admin-sidebar-nav-item ${
                location.pathname === path ? 'active' : ''
              }`}
            >
              <Icon className="admin-sidebar-icon" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}