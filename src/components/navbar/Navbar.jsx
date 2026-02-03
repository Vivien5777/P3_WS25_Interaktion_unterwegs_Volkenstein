import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <NavLink to="/" className="navbar-logo">C</NavLink>

          <ul className="navbar-list">
            <li><NavLink to="/" className="navbar-link">Startseite</NavLink></li>
            <li><NavLink to="/data" className="navbar-link">Datenschutz</NavLink></li>
            <li><NavLink to="/conditions" className="navbar-link">Nutzungsbedingungen</NavLink></li>
            <li><NavLink to="/imprint" className="navbar-link">Impressum</NavLink></li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}