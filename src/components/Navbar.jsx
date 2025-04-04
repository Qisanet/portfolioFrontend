import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <li>
          <Link className="navbar-brand" to="/">My Portfolio</Link>
        </li>
      </div>

      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="/admin/login" 
            style={{ color: "transparent", textDecoration: "none", cursor: "pointer" }}
          >
            Admin Login
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
