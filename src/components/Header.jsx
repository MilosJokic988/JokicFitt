import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="header">
     <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
  JokicFitt
</NavLink>

      <div className={`nav-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Početna</NavLink>
        <NavLink to="/o-meni" onClick={() => setMenuOpen(false)}>O meni</NavLink>

        <div className="submenu">
          <span onClick={() => setSubmenuOpen(!submenuOpen)}>Usluge ▾</span>
          {submenuOpen && (
            <div className="submenu-items">
              <NavLink to="/usluge#individualni" onClick={() => setMenuOpen(false)}>Individualni treninzi</NavLink>
              <NavLink to="/usluge#online" onClick={() => setMenuOpen(false)}>Online treninzi</NavLink>
              <NavLink to="/usluge#ishrana" onClick={() => setMenuOpen(false)}>Plan ishrane</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</NavLink>
      </nav>
    </header>
  );
};

export default Header;
