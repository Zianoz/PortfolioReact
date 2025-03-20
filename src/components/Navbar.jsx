import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // Get the current route

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">Zian</div>
            <button className="navbar-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <ul className="navbar-menu">
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
