import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  const linkClass = (path: string) =>
    `block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
      pathname === path ? 'bg-gray-300 dark:bg-gray-800 font-bold' : ''
    }`;

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg">
      <nav className="p-4 space-y-2">
        <Link to="/" className={linkClass('/')}>Dashboard</Link>
        <Link to="/reports" className={linkClass('/reports')}>Reports</Link>
        <Link to="/settings" className={linkClass('/settings')}>Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
