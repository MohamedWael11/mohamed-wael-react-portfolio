import React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar({ navItems, active, menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        MW<span>.</span>
      </a>

      <button className="menu-btn" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {navItems.map((item) => (
          <a
            className={active === item ? "active" : ""}
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Let's Talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
