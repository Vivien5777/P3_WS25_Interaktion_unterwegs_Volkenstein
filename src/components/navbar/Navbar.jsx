import { NavLink,} from "react-router-dom";
import "./Navbar.css";
import RMV from  "/Users/vivienvolkenstein/Documents/P3_WS25_Interaktion_unterwegs_Volkenstein/P3_WS25_Interaktion_unterwegs_Volkenstein/src/assets/RMV-Logo.png";

export function Navbar() {
  return (
    <>
    <nav className="navbar">
    <div className="navbar-inner">
      <NavLink to="/" className="navbar-logo">
        <img src={RMV} alt="Rmv Logo" />
      </NavLink>

          <ul className="navbar-list">
            <li><NavLink to="/" className="navbar-link">Startseite</NavLink></li>
            <li><NavLink to="/" className="navbar-link">Datenschutz</NavLink></li>
            <li><NavLink to="/" className="navbar-link">Nutzungsbedingungen</NavLink></li>
            <li><NavLink to="/" className="navbar-link">Impressum</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}