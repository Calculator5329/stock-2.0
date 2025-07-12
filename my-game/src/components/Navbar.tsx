import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-body text-lg px-4 py-2 rounded-md ${
      isActive ? 'text-neonBlue bg-white/10' : 'text-white hover:bg-white/5'
    }`;

  return (
    <nav className="bg-black/20 backdrop-blur-md p-4 rounded-xl flex justify-between items-center glass">
      <Link to="/" className="text-2xl font-title text-white">
        Market<span className="text-neonBlue">Nexus</span>
      </Link>
      <div className="flex items-center space-x-4">
        <NavLink to="/dashboard" className={navLinkClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/calculator" className={navLinkClasses}>
          Calculator
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
