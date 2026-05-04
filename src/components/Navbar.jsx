import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Atom } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-brand">
          <Atom size={28} color="var(--accent-cyan)" />
          <span>Quantum Web</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Quantum Physics</Link>
          <Link to="/quran-and-science" className={`nav-link ${location.pathname === '/quran-and-science' ? 'active' : ''}`}>Quran & Science</Link>
          <Link to="/medical-physics" className={`nav-link ${location.pathname === '/medical-physics' ? 'active' : ''}`}>Medical Quantum</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
