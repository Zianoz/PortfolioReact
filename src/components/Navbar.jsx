import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // Get the current route
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">Zian</div>

            {/* Toggle Button */}
            <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            {/* Navbar Menu */}
            <ul className={`navbar-menu ${isOpen ? "open active" : ""}`}>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
              </li>
              <li>
                <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
              </li>
              <li>
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
